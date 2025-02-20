import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function PostsList({ posts }) {
  if (!posts.length) {
    return <GotNothing />;
  }

  return (
    <div className="flex flex-wrap gap-8 w-full items-center justify-start px-4">
      {posts?.map((post, index) => (
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

import { nothing } from "@/assets/svgs";

function GotNothing() {
  const t = useTranslations("/client.Portfolio");
  return (
    <div className="bg-transparent w-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[300px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noPosts.title1")}{" "}
        <span className="text-[#FFA500]">{t("noPosts.title2")}</span>
      </p>
    </div>
  );
}
