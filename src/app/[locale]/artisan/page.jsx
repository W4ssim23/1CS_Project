"use client";

import { Avatar } from "@nextui-org/react";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function ClientPage() {
  const { userData } = useContext(GlobalContext);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <Avatar
        size="lg"
        src={userData?.pfp}
        className="w-[200px] h-[200px]"
        fallback
      />
      <h1 className="text-4xl font-bold text-black mt-4">welcome back !</h1>
    </div>
  );
}
