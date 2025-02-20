"use client";
import React from "react";
import RejectButton from "./RejectButton";
import AcceptButton from "./AcceptButton";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Buttons({ id }) {
  const t = useTranslations("/admin.ArtisanValidation");
  const [appearence, setAppearence] = useState(true);

  if (appearence) {
    return (
      <div className="flex gap-2 w-full items-center justify-end">
        <RejectButton setAppearence={setAppearence} id={id} />
        <AcceptButton setAppearence={setAppearence} id={id} />
      </div>
    );
  }
  return (
    <div className="flex gap-2 w-full items-center justify-end px-[70px] font-bold transition-all duration-250 ease-in-out">
      <p>{t("doneMessage")}</p>
    </div>
  );
}
