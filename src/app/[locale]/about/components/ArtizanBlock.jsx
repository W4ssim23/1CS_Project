import { workman } from "@/assets/svgs";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ArtizanBlock() {
  const t = useTranslations("/about.ArtizanBlock");

  return (
    <main className="w-full h-full sm:min-h-screen min-h-[80vh] flex flex-col items-center justify-between sm:justify-normal gap-10">
      <h1 className="sm:text-[58px] text-[40px] text-center max-w-[600px] font-bold mt-16 sm:mt-0">
        {t("title")}
      </h1>
      <p className="text-center text-[24px] font-semibold text-[#00000052]">
        {t("description")}
      </p>
      <Image src={workman} alt="workmen" priority />
    </main>
  );
}
