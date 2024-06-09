import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useApi(url) {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
}
