"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { itemsAdmin } from "@/lib";
import { usePathname } from "@/i18n/routing";
import { useContext } from "react";
import { GlobalContext } from "@/app/[locale]/context";
import { Avatar } from "@nextui-org/react";

export default function SideBarAdmin() {
  const pg = usePathname();
  const { userData } = useContext(GlobalContext);
  return (
    <nav className="min-w-[20%] bg-[#3A5BA0] shadow-md hidden sm:block ">
      <div className="h-[130px] border-b-[0.25px] border-[#BDBDBD] w-full flex flex-col items-center justify-evenly">
        <Avatar src={userData?.avatar} size="lg" fallback />
        <p className="text-white">
          {(userData?.firstName ?? " ") + " " + (userData?.lastName ?? " ")}
        </p>
      </div>
      <ul className="flex flex-col items-center w-full gap-4 lg:gap-0 pt-5">
        {itemsAdmin.map((item, index) => (
          <BarItem pg={pg} item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
}

const BarItem = ({ item, pg }) => {
  return (
    <Link
      href={item.page}
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
          {item.title}
        </p>
      </div>
    </Link>
  );
};
