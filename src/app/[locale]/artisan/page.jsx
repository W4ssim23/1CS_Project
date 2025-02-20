"use client";

import { Avatar } from "@nextui-org/react";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { useTranslations } from "next-intl";

export default function ClientPage() {
  const t = useTranslations("welcome");
  const { userData } = useContext(GlobalContext);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <Avatar
        size="lg"
        src={userData?.pfpLink}
        className="w-[200px] h-[200px]"
        fallback
      />
      <h1 className="text-4xl font-bold text-black mt-4">{t("welcome")}</h1>
    </div>
  );
}
