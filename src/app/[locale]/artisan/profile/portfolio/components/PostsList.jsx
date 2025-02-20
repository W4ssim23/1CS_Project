import Image from "next/image";
import React from "react";

export default function PostsList({ posts }) {
  return (
    <div className="flex flex-wrap gap-8 w-full items-center justify-start px-4">
      {posts.map((post, index) => (
        <PostCard key={index} data={post} />
      ))}
    </div>
  );
}

function PostCard({ data }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden max-w-md min-h-52 hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-auto">
      <div className="absolute inset-0">
        <Image
          src={data.picture}
          alt={data.title}
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="relative p-4 max-w-md text-white">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-sm mt-1">{data.description}</p>
      </div>
    </div>
  );
}
