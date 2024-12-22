"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { itemsAdmin } from "@/lib";
import { ellipse6 } from "@/assets/svgs";
import { usePathname } from "@/i18n/routing";

export default function SideBarAdmin() {
  const pg = usePathname();
  return (
    <nav className="min-w-[20%] bg-white shadow-md hidden sm:block ">
      <div className="h-[130px] border-b-2 w-full flex flex-col items-center justify-evenly">
        <Image src={ellipse6} alt="ellipse" />
        {/* will be replaced with the actual account name */}
        <p>DZ-Artisan.owner</p>
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
          <Image src={item.svg} alt={item.title} height={23} width={23} />
        </div>
        <p
          className={`text-[17px] font-[400] hidden lg:block ${
            pg === item.page.toLowerCase()
              ? "text-[#1F4690]"
              : "text-[#00000085]"
          }`}
        >
          {item.title}
        </p>
      </div>
    </Link>
  );
};
