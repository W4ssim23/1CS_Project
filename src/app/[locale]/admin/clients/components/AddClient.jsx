import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function AddClient() {
  const t = useTranslations("/admin.AddClient");

  return (
    <div className="w-full flex items-center justify-between p-3 px-5 text-center bg-white">
      <p className="text-[16px] font-semibold">{t("title")}</p>
      <Button
        className="bg-[#509CDB] text-white text-[13px] p-4"
        href="#"
        variant="flat"
        radius="sm"
      >
        {t("button")}
      </Button>
    </div>
  );
}
