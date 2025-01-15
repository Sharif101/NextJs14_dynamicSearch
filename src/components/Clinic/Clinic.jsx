"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Clinic({ data }) {
  const router = useRouter();
  const [searchClinic, setSearchClinic] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchClinic(value);

    if (searchClinic.trim() !== "") {
      router.push(`/search?query=${searchClinic}`);
    }
  };

  return (
    <div>
      <h1>All Clinics</h1>
      <div>
        <input
          type="text"
          className="border border-slate-600"
          value={searchClinic}
          onChange={handleSearch}
        />
      </div>

      <div>
        {data && data[1].length > 0 ? (
          data[1]?.map((cl) => (
            <div key={cl.id}>
              <p>
                <strong>Name:</strong> {cl.name}
              </p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
