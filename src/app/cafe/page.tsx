"use client";

import { useEffect, useState } from "react";

type Cafe = {
  name: string;
  rating: number;
  formatted_address: string;
  place_id: string;
};

export default function CafePage() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCafes = async (pageToken?: string) => {
    setLoading(true);
    const res = await fetch(
      `/api/cafes${pageToken ? `?pageToken=${pageToken}` : ""}`
    );
    const data = await res.json();
    setCafes((prev) => [...prev, ...data.cafes]);
    setNextPageToken(data.nextPageToken || null);
    setLoading(false);
  };

  useEffect(() => {
    fetchCafes(); // initial load
  }, []);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        ☕ Cafes in Hyderabad
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map((cafe) => (
          <div
            key={cafe.place_id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {cafe.name}
            </h2>
            <p className="text-gray-600 mb-3">{cafe.formatted_address}</p>
            <div className="flex items-center gap-2 text-yellow-600 font-medium">
              ⭐ {cafe.rating ?? "N/A"}
            </div>
          </div>
        ))}
      </div>

      {nextPageToken && (
        <div className="text-center mt-10">
          <button
            onClick={() => fetchCafes(nextPageToken)}
            className="bg-black text-[#bebfa8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More Cafes"}
          </button>
        </div>
      )}
    </div>
  );
}
