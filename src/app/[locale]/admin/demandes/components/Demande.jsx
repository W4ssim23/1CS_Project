import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { Options, pdf } from "@/assets/svgs";
import { Link } from "@/i18n/routing";
import Buttons from "./Buttons";
import { useTranslations } from "next-intl";

export default function Demande({ data }) {
  const t = useTranslations("/admin.ArtisanValidation");
  const files = [data.certificateLink, data.assuranceLink];

  return (
    <div className="w-full bg-white rounded-md flex flex-col items-center p-3 gap-2 max-w-[850px]">
      <div className="w-full flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Avatar src={data?.avatar} alt="user" size="md" fallback />
          <p>{data?.firstName + " " + data?.lastName}</p>
        </div>
        <Image src={Options} alt="Options" className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2 w-[90%] p-4 bg-[#F8F8F8] rounded-md">
        <p>
          {t("requestMessage", {
            firstName: data?.firstName,
            lastName: data?.lastName,
            job: data?.job,
          })}
        </p>
        <div className="flex flex-shrink-0 gap-2 rounded-full whitespace-nowrap overflow-x-auto w-full py-2 items-center">
          {files?.map((file, idx) => {
            if (!file) return null;
            return (
              <Link href={file} key={idx}>
                <div className="text-[#606060] text-sm p-1 px-2 border border-[#606060] rounded-full flex items-center gap-1 cursor-pointer w-fit max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                  <Image src={pdf} alt="file" width={18} height={18} />
                  {idx === 0
                    ? t("fileLabels.certificate")
                    : t("fileLabels.insurance")}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Buttons id={data.id} />
    </div>
  );
}
