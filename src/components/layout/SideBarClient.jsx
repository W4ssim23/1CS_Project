"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { itemsClient } from "@/lib";
import { usePathname } from "@/i18n/routing";
import { Avatar } from "@nextui-org/react";
import { useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";
import { useTranslations } from "next-intl";

export default function SideBarClient() {
  const pg = usePathname();
  const { userData } = useContext(GlobalContext);
  const t = useTranslations("sideBar.client");

  return (
    <nav className="min-w-[20%] bg-[#3A5BA0] shadow-md hidden sm:block ">
      <div className="h-[130px] border-b-[0.25px] border-[#BDBDBD] w-full flex flex-col items-center justify-evenly">
        <Avatar
          src={userData?.pfpLink}
          size="lg"
          className="w-[70px] h-[70px]"
          fallback
        />
        <p className="text-white">
          {(userData?.firstName ?? " ") + " " + (userData?.lastName ?? " ")}
        </p>
      </div>
      <ul className="flex flex-col items-center w-full gap-4 lg:gap-0 pt-5">
        {itemsClient.map((item, index) => (
          <BarItem
            pg={pg}
            item={item}
            id={userData?.idUser}
            pfp={userData?.pfpLink}
            key={index}
            t={t}
          />
        ))}
      </ul>
    </nav>
  );
}

const BarItem = ({ item, pg, t, id, pfp }) => {
  return (
    <Link
      href={item.page + "?id=" + id + "&pfp=" + pfp}
      className="cursor-pointer hover:scale-105 transition-all overflow-hidden select-none
                 lg:w-[98%] p-3 lg:p-5  
                 rounded-full lg:rounded-none"
      key={item.title}
    >
      <div className="flex items-center gap-4 lg:ml-[8%]">
        <div className="flex w-[23px] h-[23px] overflow-hidden">
          <Image
            src={
              pg.startsWith(item.page.toLowerCase())
                ? item.svgSelected
                : item.svg
            }
            alt={item.title}
            height={23}
            width={23}
          />
        </div>
        <p
          className={`text-[17px] font-[400]  hidden lg:block ${
            pg.startsWith(item.page.toLowerCase())
              ? "text-[#FFA500]"
              : "text-white"
          }`}
        >
          {t(item.title.toLowerCase())}
        </p>
      </div>
    </Link>
  );
};
