"use client";
import Image from "next/image";
import React from "react";

export default function Gallery({ data }) {
  console.log(data);

  return (
    <div className="w-[90%] mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.carts.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={img.products[0]?.thumbnail}
              alt={`Image ${index + 1}`}
              layout="responsive" // Ensures responsive resizing
              width={600}
              height={400}
              className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,iVBORw0..." // Replace with a real Base64 string
              priority={index < 2} // Loads only the first 2 images faster (above-the-fold)
            />

            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
