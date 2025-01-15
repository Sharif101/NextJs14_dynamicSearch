import { Clinic } from "@/components";
import React from "react";

async function fetchClinics(search = "") {
  const res = await fetch(
    `https://hx-dev-api.healthxbd.com/api/v1/test-provider/guardian?name=${search}&skip=0&limit=10`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page({ params, searchParams }) {
  const data = await fetchClinics(searchParams.query);

  console.log(searchParams.query);

  return (
    <div>
      <Clinic data={data} />
    </div>
  );
}
