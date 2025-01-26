import { Clinic } from "@/components";
import React from "react";

async function fetchClinics(search = "", limit = 10, skip) {
  const res = await fetch(
    `https://hx-dev-api.healthxbd.com/api/v1/test-provider/guardian?name=${search}&skip=${skip}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page({ searchParams }) {
  // Extract the `name` parameter from searchParams
  const { name = "", page = "1", limit = "10" } = searchParams;

  // Parse and calculate pagination values
  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const skip = (pageNum - 1) * limitNum;
  // Fetch data based on the `name` parameter
  const data = await fetchClinics(name, limitNum, skip);

  console.log("Search Params:", searchParams);

  return (
    <div>
      <Clinic data={data} />
    </div>
  );
}
