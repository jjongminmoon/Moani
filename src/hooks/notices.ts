import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../services/firebase";

export default function useNoticeList() {
  const [noticeList, setNoticeList] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "notices"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setNoticeList(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { noticeList };
}
