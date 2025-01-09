import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ConnectButton() {
  const t = useTranslations("/register.RegisterForm");
  return (
    <div className="flex flex-col gap-4">
      <h1>{t("haveAccount")}</h1>
      <Link href="/login">
        <button className=" text-[#FFA500] text-center font-medium  border-[#FFA500] border-small bg-[#F3F3F3] rounded-md py-3 px-4 min-w-[222px]">
          {t("connect")}
        </button>
      </Link>
    </div>
  );
}
