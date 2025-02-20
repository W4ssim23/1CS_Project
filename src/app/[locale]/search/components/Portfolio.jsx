import React from "react";
import { useEffect, useState } from "react";

export default function Portfolio({ searchParams, userDataa, setPortfolioId }) {
  const t = useTranslations("/client.Portfolio");
  const [userData, setUserData] = useState(null);
  const id = searchParams?.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://onecs-back.onrender.com/app/artisan/profile/${id}/portfolio/`,
          {
            cache: "no-cache",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          const data = await response.json();
          console.log(data.message);
          return;
        }

        const data = await response.json();
        if (data.error) {
          console.log(data.message);
        } else {
          setUserData(data);
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  return (
    <div className="w-full min-h-[95vh] flex flex-col items-center justify-start px-16">
      <div
        className="w-full flex items-center justify-start"
        onClick={() => setPortfolioId(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-900 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <UserInfo userData={userDataa} />
      <div className="w-full flex items-center justify-start border-b-2 border-blue-600 pb-3">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl text-blue-900">{t("postsTitle")}</p>
        </div>
      </div>
      <PostsList posts={userData?.posts || []} />
    </div>
  );
}

import Image from "next/image";

function PostsList({ posts }) {
  const t = useTranslations("/client.Portfolio");
  if (!posts.length) {
    return <GotNothing />;
  }

  return (
    <div className="flex flex-wrap gap-8 w-full items-center justify-start px-4">
      {posts.map((post, index) => (
        <PostCard key={index} data={post} />
      ))}
    </div>
  );
}

import { nothing } from "@/assets/svgs";
import { useTranslations } from "next-intl";

function GotNothing() {
  const t = useTranslations("/client.Portfolioo");
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[300px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noPosts.title1")}{" "}
        <span className="text-[#FFA500]">{t("noPosts.title2")}</span>
      </p>
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

import { Avatar } from "@nextui-org/react";

function UserInfo({ userData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Avatar
        src={userData?.artisanPfpLink}
        className="h-[140px] w-[140px]"
        fallback
      />
      <p className="font-semibold text-blue-900 text-3xl tracking-wide border-b-3 border-blue-900 pb-1">
        {userData?.artisanName}
      </p>
      <p className="font-bold text-blue-900 text-2xl tracking-wide">
        {userData?.artisanJob}
      </p>
    </div>
  );
}
