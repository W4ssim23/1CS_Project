import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AddDevis({ id }) {
  const t = useTranslations("/client.Devis");
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between p-3 px-5 text-center gap-4 sm:gap-0">
      <p className="text-[24px] font-semibold">
        {t("resultsTitle1")}{" "}
        <span className="text-[#FFA500]">{t("resultsTitle2")}</span>
      </p>
      <Link href={"/client/devis/new?id=" + id}>
        <Button
          className="bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px] min-w-[200px]"
          size="lg"
          radius="lg"
        >
          {t("newDevisButton")}
        </Button>
      </Link>
    </div>
  );
}
