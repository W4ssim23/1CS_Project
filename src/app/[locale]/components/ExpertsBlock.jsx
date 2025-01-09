import Image from "next/image";
import { adembell, ahmadmuli, mariajhon } from "@/assets/images";
import { useTranslations } from "next-intl";

export default function ExpertsBlock() {
  const t = useTranslations("/");

  const pics = [ahmadmuli, adembell, mariajhon];
  const experts = [
    t("expertBlock.expert1"),
    t("expertBlock.expert2"),
    t("expertBlock.expert3"),
  ];
  const descriptions = [
    t("expertBlock.descriptions1"),
    t("expertBlock.descriptions2"),
    t("expertBlock.descriptions3"),
  ];

  return (
    <main className="flex flex-col w-full h-fit min-h-lvh items-center gap-10">
      <p className="text-[30px] mt-3 sm:mt-0 sm:text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
        {t("expertBlock.title1")}
      </p>
      <p className="text-[19px] sm:text-[24px] text-center max-w-[1200px] font-semibold ">
        {t("expertBlock.title2")}
      </p>
      <div className="flex flex-col sm:flex-row gap-20">
        {pics.map((pic, index) => (
          <ExpertCard
            key={index}
            pic={pic}
            title={experts[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
    </main>
  );
}

function ExpertCard({ pic, title = "", description = "" }) {
  return (
    <main className="flex flex-col items-center gap-2">
      <Image src={pic} alt={title} className="" />
      <p className="text-[20px]  font-bold text-black ">{title}</p>
      <p className="text-[16px]  font-semibold text-[#00000070] max-w-[280px] text-center">
        {description}
      </p>
    </main>
  );
}
