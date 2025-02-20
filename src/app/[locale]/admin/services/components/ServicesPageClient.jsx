import GotNothing from "./GotNothing";
import PaginationControle from "./PaginationControle";
import { useTranslations } from "next-intl";

export default function ServicesPageClient({ usersData }) {
  const t = useTranslations("/admin.Services");

  if (!usersData) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  if (!usersData.travaux.length) {
    return (
      <div className="w-[90%]">
        <GotNothing
          title={t("noServices")}
          description={t("noServicesDescription")}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center p-2 gap-12">
      <h1 className="text-3xl font-bold w-[90%] pt-2">
        {t("title1")} <span className="text-[#FFA500]">{t("title2")}</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex sm:w-[90%] justify-between p-4 items-center text-gray-500 font-semibold text-center">
          <p className=" w-full">{t("artisan")}</p>
          <p className=" w-full">{t("client")}</p>
          <p className=" w-full">{t("service")}</p>
          <p className="hidden sm:block w-full">{t("price")}</p>
          <p className="hidden sm:block w-full">{t("pourcentage")}</p>
          <p className="hidden md:block w-full">{t("payed")}</p>
        </div>
        <div className="w-full flex flex-col items-center gap-5 text-center max-h-[70vh] overflow-y-auto pb-1">
          {usersData.travaux.map((item, idx) => (
            <div
              key={item.id}
              className="w-full sm:w-[90%] h-[70px] bg-blue-700 bg-opacity-10 shadow-md rounded-xl flex items-center justify-between p-1 sm:p-4 font-[550]"
            >
              <p className=" w-full">{item.artisan_name}</p>
              <p className=" w-full">{item.client_name}</p>
              <p className=" w-full">{item.demand_title}</p>
              <p className="hidden sm:block text-green-600 w-full ">
                {item.price} DA
              </p>

              <p className="hidden sm:block text-orange-400 w-full ">
                {isNaN(item.completion_percentage)
                  ? 0
                  : Number(item.completion_percentage).toFixed(2)}{" "}
                %
              </p>

              <p
                className={
                  item.is_paid
                    ? "text-green-600 hidden md:block w-full "
                    : "text-red-600 hidden md:block w-full "
                }
              >
                {item.is_paid ? t("payed") : t("notPayed")}
              </p>
            </div>
          ))}
        </div>
        <PaginationControle pagination={usersData.pagination} />
      </div>
    </div>
  );
}
