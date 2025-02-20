import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("/.footer");

  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0">
        <div className="sm:w-1/3 w-2/3 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-blue-900">{t("title")}</h3>
          <p className="text-sm text-gray-600 mt-4 sm:max-w-60">
            {t("description")}
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-blue-900 text-nowrap">
            {t("linksTitle")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 font-bold">
            <li>
              <Link href="/" className="hover:underline">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:underline">
                {t("findPro")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:underline">
                {t("register")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col items-center text-center gap-3">
          <h3 className="text-lg font-semibold text-blue-900 text-nowrap">
            {t("contactTitle")}
          </h3>
          <p className="text-sm text-gray-700 mt-4">{t("phone")}</p>
          <p className="text-sm text-gray-700">
            <a href={`mailto:${t("email")}`} className="hover:underline">
              {t("email")}
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <a href={t("website")} target="_blank" className="hover:underline">
              {t("website")}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-600">&copy; {t("rightsReserved")}</p>
      </div>
    </footer>
  );
}
