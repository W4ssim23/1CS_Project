import { Link } from "@/i18n/routing";
import Image from "next/image";
import { bank, profile_add, frame30085 } from "@/assets/svgs";
import { useTranslations } from "next-intl";

export default function AdminPage() {
  const t = useTranslations("/admin.AdminPage");

  const elements = [
    {
      icon: profile_add,
      title: t("addClient.title"),
      text: t("addClient.text"),
      link: "/admin/clients",
    },
    {
      icon: bank,
      title: t("addArtisan.title"),
      text: t("addArtisan.text"),
      link: "/admin/artisans",
    },
    {
      icon: frame30085,
      title: t("addService.title"),
      text: t("addService.text"),
      link: "/admin/services",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-16 sm:gap-28 text-[#4F4F4F]">
      <div className="w-full flex flex-col items-center gap-10">
        <h1 className="font-bold text-[22px] sm:text-[25px] max-w-[700px] text-center">
          {t("welcome")}
        </h1>
      </div>
      <div className="flex flex-col gap-8 sm:gap-4">
        {elements.map((element, index) => (
          <Element key={index} {...element} />
        ))}
      </div>
    </div>
  );
}

function Element({ icon, title, text, link }) {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-start">
      <Link href={link}>
        <div className="flex gap-6 font-semibold">
          <Image src={icon} alt={title} width={24} height={24} />
          <h1>{title}</h1>
        </div>
      </Link>
      <p className="sm:pl-10 max-w-[500px] sm:max-w-[700px]">{text}</p>
    </div>
  );
}
