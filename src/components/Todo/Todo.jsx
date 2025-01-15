"use client";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();

      console.log(data);
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <p>This is client side rendering 'open browser log'</p>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {data.map((dt, id) => (
            <p key={id}>{dt.title}</p>
          ))}
        </>
      )}
    </div>
  );
}
