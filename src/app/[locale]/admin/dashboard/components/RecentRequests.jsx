import { Link } from "@/i18n/routing";
import Image from "next/image";
import { miner } from "@/assets/svgs";
import { useTranslations } from "next-intl";

export default function RecentRequests({ data }) {
  const t = useTranslations("/admin.RecentRequests");
  const requests = data;

  return (
    <div className="sm:p-6 pl-0 rounded-lg  w-full  mx-auto ml-0 ">
      <h2 className="text-xl font-bold text-[#1F4690] mb-6">{t("title")}</h2>
      <ul className="space-y-4 max-h-[200px] overflow-y-auto pr-4  ">
        {requests.map((request) => (
          <li
            key={request.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <Image src={miner} alt="Avatar" width={40} height={40} />
              <p className="text-gray-700 text-sm">
                {request.firstName + "   " + request.lastName}
              </p>
            </div>
            <Link
              href={`/admin/services`}
              className="text-[#1F4690] text-sm font-medium hover:underline"
            >
              {t("viewMore")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
