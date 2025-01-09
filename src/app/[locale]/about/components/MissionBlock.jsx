import { rb_33 } from "@/assets/svgs";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MissionBlock() {
  const t = useTranslations("/about.MissionBlock");

  return (
    <main className="w-full h-full sm:min-h-screen flex sm:flex-row flex-col-reverse  items-center justify-evenly gap-10 bg-[#F4F4F4] py-8 sm:py-0">
      <div className="flex flex-col h-full items-center justify-center gap-10">
        <h1 className="text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
          {t("title")}
        </h1>
        <p className="sm:text-start text-center sm:text-[24px] font-semibold text-[#00000052] w-[70%] sm:w-[100%] max-w-[510px]">
          {t("description")}
        </p>
      </div>
      <Image src={rb_33} alt="rb_33" />
    </main>
  );
}
