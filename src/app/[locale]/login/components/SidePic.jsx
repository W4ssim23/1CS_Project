import { registerPic } from "@/assets/svgs";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SidePic() {
  const t = useTranslations("/login.SidePic");

  return (
    <div
      data-testid="side-pic"
      className="h-full w-full hidden  sm:flex flex-col md:items-start items-center gap-14 py-10 md:gap-10 md:p-10 md:pl-16 md:min-w-[60%]"
    >
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-normal gap-5">
        <p className=" text-center text-3xl font-semibold tracking-wide">
          {t("welcomeText")}
        </p>
        <p className=" text-gray-400 text-center ">{t("supportText")}</p>
      </div>

      <Image src={registerPic} alt="Register" className="" />
    </div>
  );
}
