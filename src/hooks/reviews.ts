import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../services/firebase";

export default function useReviewList() {
  const [reviewList, setReviewList] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setReviewList(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { reviewList };
}
