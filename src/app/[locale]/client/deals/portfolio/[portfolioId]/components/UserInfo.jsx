import React from "react";
import { Avatar } from "@nextui-org/react";

export default function UserInfo({ userData }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Avatar src={userData?.pfp} className="h-[140px] w-[140px]" fallback />
      <p className=" font-semibold text-blue-900 text-3xl tracking-wide border-b-3 border-blue-900 pb-1">
        {userData?.name}
      </p>
      <p className=" font-bold text-blue-900 text-2xl tracking-wide">
        {userData?.job}
      </p>
    </div>
  );
}
