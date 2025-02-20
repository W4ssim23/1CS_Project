"use client";
import React from "react";
import { Avatar } from "@nextui-org/react";
import { useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";

export default function UserInfo() {
  const { userData } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Avatar
        src={userData?.pfpLink}
        className="h-[140px] w-[140px]"
        fallback
      />
      <p className=" font-semibold text-blue-900 text-3xl tracking-wide border-b-3 border-blue-900 pb-1">
        {userData?.firstName + " " + userData?.lastName}
      </p>
      <p className=" font-bold text-blue-900 text-2xl tracking-wide">
        {userData?.job}
      </p>
    </div>
  );
}
