"use client";

import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  limit as firebaseLimit,
} from "firebase/firestore";
import { db } from "@/app/firebase/config";

const useFetchRecentReviews = (
  id,
  limit = null,
  collectionName = "reviews"
) => {
  const [recentData, setRecentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      setError(null); // Reset error state before fetching

      try {
        // Construct the query with optional limit and collection name
        const reviewsQuery = limit
          ? query(
              collection(db, collectionName), // Use the provided or default collection name
              orderBy("timestamp", "desc"),
              firebaseLimit(limit)
            )
          : query(collection(db, collectionName), orderBy("timestamp", "desc"));

        const querySnapshot = await getDocs(reviewsQuery);
        const reviews = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRecentData(reviews);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
        setError(error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or error)
      }
    };

    fetchReviews();
  }, [id, limit, collectionName]);

  return { recentData, isLoading, error };
};

export default useFetchRecentReviews;
