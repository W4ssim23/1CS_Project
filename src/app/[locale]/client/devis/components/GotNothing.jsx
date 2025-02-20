import Image from "next/image";
import { nothing } from "@/assets/svgs";
import { useTranslations } from "next-intl";

export default function GotNothing() {
  const t = useTranslations("/client.Devis");
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] rounded-2xl">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noDevis.title1")}{" "}
        <span className="text-[#FFA500]">{t("noDevis.title2")}</span>
      </p>
      <p>{t("noDevis.description")}</p>
    </div>
  );
}
