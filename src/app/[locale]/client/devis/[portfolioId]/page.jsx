import React from "react";
import UserInfo from "./components/UserInfo";
import PostsList from "./components/PostsList";
import { getTranslations } from "next-intl/server";

export default async function Portfolio({ params }) {
  const t = await getTranslations("/client.Portfolio");
  const id = params?.portfolioId;
  if (!id) {
    redirect("/");
  }
  let userData = null;
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
    }
    const data = await response.json();
    if (data.error) {
      console.log(data.message);
    } else {
      userData = data;
      console.log(userData);
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="w-full min-h-[95vh] flex flex-col items-center justify-start p-4 gap-8">
      <UserInfo userData={userData?.profile} />
      <div className="w-full flex items-center justify-between border-b-2 border-blue-600 pb-3">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl text-blue-900">{t("postsTitle")}</p>
        </div>
      </div>
      <PostsList posts={userData?.posts} />
    </div>
  );
}
