import Image from "next/image";
import { welcomeGuy } from "@/assets/svgs";
import { Button } from "@nextui-org/react";

import { useTranslations } from "next-intl";

export default function WelcomeBlock() {
  const t = useTranslations("/");

  return (
    <main className="flex w-full h-full flex-wrap md:flex-nowrap items-center">
      <div className="h-full flex flex-col w-full md:w-[60%] gap-14 items-center">
        <p className=" text-[30px] mt-3 sm:mt-0 sm:text-[58px] text-center max-w-[600px] font-bold motion-preset-blur-right motion-duration-700">
          {t("title")}
          <span className="text-[#FFA500]"> {t("colored")} </span>
          {t("continue")}
        </p>
        <p className="text-center max-w-[480px] text-[18px] sm:text-[24px] font-semibold text-[#00000052] motion-preset-blur-right motion-duration-800">
          {t("enderTitle")}
        </p>
        <Button
          className="text-white bg-[#1F4690] w-[180px] h-[45px] hidden md:block motion-preset-blur-right motion-duration-900"
          radius="sm"
        >
          {t("button")}
        </Button>
      </div>
      <div className="w-full md:w-[40%] flex items-center justify-center mt-8 md:mt-0">
        <Image
          src={welcomeGuy}
          alt="welcImg"
          className="max-h-96 md:max-h-full"
          priority
        />
        {/* <Button
          className="text-white bg-[#1F4690] w-[180px] h-[45px] sm:hidden block"
          radius="sm"
        >
          {t("button")}
        </Button> */}
      </div>
    </main>
  );
}
