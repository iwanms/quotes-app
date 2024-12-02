"use client";

import List from "@/components/List";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from an API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/quotes");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json(); // Parse JSON data
        setData(result); // Update the state with the fetched data
      } catch (err) {
        setError(err.message); // Catch any errors
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.Quotes.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
