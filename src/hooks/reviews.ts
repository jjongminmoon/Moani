import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../services/firebase";

export default function useReviewList() {
  const [reviewData, setReviewData] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setReviewData({
        perPage: 12,
        totalReviews: arr.length,
        totalPages: Math.ceil(arr.length / 12),
        reviewList: arr
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { reviewData };
}
