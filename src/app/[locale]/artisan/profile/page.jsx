import React from "react";
import Image from "next/image";
import { consult, port } from "@/assets/svgs";
import { Link } from "@/i18n/routing";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function Profile({ searchParams }) {
  const t = await getTranslations("/artisan.Profile");
  const id = searchParams?.id;
  const pfp = searchParams?.pfp;
  if (!id || !pfp) {
    return redirect("/");
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10">
      <h3 className="text-center text-2xl font-semibold max-w-[600px]">
        {t("welcomeMessage1")}{" "}
        <span className="text-[#FFA500]">{t("welcomeMessage2")}</span>{" "}
        {t("welcomeMessage3")}
      </h3>
      <h3 className="text-center text-lg text-[#787878] font-medium max-w-[600px]">
        {t("instructionMessage")}
      </h3>
      <div className="flex sm:flex-row flex-col items-center w-full justify-center gap-10">
        <Link href={`profile/portfolio?id=${id}&pfp=${pfp}`}>
          <div className="bg-[#E3EDF9] rounded-xl sm:p-6 p-3 shadow-xl flex items-center font-semibold gap-3 text-center text-[#1F4690] hover:-translate-y-1 transition-all">
            <Image src={port} className="" alt="a" />
            <h1>{t("viewPortfolio")}</h1>
          </div>
        </Link>
        <Link href={`profile/edit-profile?id=${id}&pfp=${pfp}`}>
          <div className="bg-[#E3EDF9] rounded-xl sm:p-6 p-3 shadow-xl flex items-center font-semibold gap-3 text-center text-[#1F4690] hover:-translate-y-1 transition-all">
            <Image src={consult} alt="b" />
            <h1 className="max-w-[125px] text-wrap">{t("viewProfileInfo")}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
