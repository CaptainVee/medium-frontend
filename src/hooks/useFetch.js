import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    FetchBlogs(url);
  }, [url]);

  // Fetch blogs
  const FetchBlogs = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
    setError(null);
  };

  const deleteBlog = async (url) => {
    if (window.confirm("are you sure you want to delete?")) {
      await fetch(url, { method: "DELETE" });
      navigate("/");
    }
  };

  return { data, loading, error, deleteBlog };
}

export default useFetch;
