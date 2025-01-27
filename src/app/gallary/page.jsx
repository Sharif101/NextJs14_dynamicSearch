import { Gallary } from "@/components";
import React from "react";

export default async function page() {
  const getData = async () => {
    const response = await fetch(`https://dummyjson.com/carts`);
    const data = await response.json();
    return data;
  };

  const data = await getData();

  return (
    <div>
      <Gallary data={data} />
    </div>
  );
}
