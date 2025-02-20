import Image from "next/image";
import { nothing } from "@/assets/svgs";
import { useTranslations } from "next-intl";

export default function GotNothing() {
  const t = useTranslations("/admin.DemandesList.noRequests");

  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">{t("title")}</p>
      <p>{t("description")}</p>
    </div>
  );
}
