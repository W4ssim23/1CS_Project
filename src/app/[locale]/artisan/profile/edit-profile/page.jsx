import React from "react";
import ProfileForm from "./components/ProfileForm";
import PasswordForm from "./components/PasswordForm";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function EditProfile({ searchParams }) {
  const t = await getTranslations("/artisan.EditProfile");
  const pfp = searchParams?.pfp;
  const id = searchParams?.id;

  if (!pfp || !id) {
    return redirect("/");
  }

  return (
    <div className="h-full w-full flex flex-col p-8 gap-4">
      <h1 className="text-3xl font-bold">
        {t("title1")} <span className="text-[#FFA500]">{t("title2")}</span>
      </h1>
      <ProfileForm pfpe={pfp} id={id} />
      <PasswordForm id={id} />
    </div>
  );
}
