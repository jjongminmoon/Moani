import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../services/firebase";

export default function useNoticeList() {
  const [noticeData, setNoticeData] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setNoticeData({
        perPage: 10,
        totalNotices: arr.length,
        totalPages: Math.ceil(arr.length / 10),
        noticeList: arr
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { noticeData };
}
