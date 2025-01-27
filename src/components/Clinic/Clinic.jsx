"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Clinic({ data }) {
  const router = useRouter();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(data[0]?.results / itemPerPage);

  const [query, setQuery] = useState({
    name: "",
    page: 1,
    limit: 10,
  });

  const [debouncedName, setDebouncedName] = useState(query.name);

  const handleChange = (key, value) => {
    const updateValue = { ...query, [key]: value };
    setQuery(updateValue);

    const queryString = new URLSearchParams(updateValue).toString();
    router.replace(`/clinic?${queryString}`, { scroll: false });
  };

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      handleChange("name", debouncedName);
    }, 200);
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedName]);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Clinics</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border border-slate-600 rounded p-2 w-full"
          placeholder="Search for a clinic..."
          value={debouncedName}
          onChange={(e) => {
            setDebouncedName(e.target.value);
          }}
        />
      </div>
      <div>
        {data && data[1].length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    ID
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {data[1]?.map((cl) => (
                  <tr key={cl.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      {cl.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {cl.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>

      {/* -----------------pagination------------------------- */}
      <div className="pagination flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Page Size Selector */}
        <div className="flex items-center space-x-2">
          <label
            htmlFor="page-size"
            className="text-sm font-medium text-gray-700"
          >
            Show:
          </label>
          <select
            id="page-size"
            className="border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={query.limit}
            onChange={(e) => {
              handleChange("limit", e.target.value);
              setItemPerPage(e.target.value);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Pagination Numbers */}
        <div className="flex items-center space-x-2">
          {/* Current Page / Total Pages */}
          <span className="text-sm text-gray-600">
            Page <span className="font-bold">{currentPage}</span> of{" "}
            <span className="font-bold">{totalPage}</span>
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              if (currentPage > 1) {
                handleChange("page", currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            onClick={() => {
              if (currentPage < totalPage) {
                handleChange("page", currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            disabled={currentPage >= totalPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
