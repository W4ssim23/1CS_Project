import React from "react";
import Image from "next/image";
import { consult, port } from "@/assets/svgs";
import { Link } from "@/i18n/routing";

export default function Profile() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10">
      <h3 className=" text-center text-2xl font-semibold max-w-[600px]">
        Bienvenue <span className="text-[#FFA500]">Artisan</span> sur votre
        profil dédié dans notre plateforme DZ-Artisan !
      </h3>
      <h3 className=" text-center text-lg text-[#787878] font-medium max-w-[600px]">
        Veuillez choisir une option pour accéder à vos informations ou à votre
        portfolio.
      </h3>
      <div className="flex sm:flex-row flex-col items-center w-full justify-center gap-10">
        <Link href="profile/portfolio">
          <div className="bg-[#E3EDF9] rounded-xl sm:p-6 p-3 shadow-xl flex items-center font-semibold gap-3 text-center text-[#1F4690] hover:-translate-y-1 transition-all">
            <Image src={port} className="" alt="a" />
            <h1>Voir le portfolio</h1>
          </div>
        </Link>
        <Link href="profile/edit-profile">
          <div className="bg-[#E3EDF9] rounded-xl sm:p-6 p-3 shadow-xl flex items-center font-semibold gap-3 text-center text-[#1F4690] hover:-translate-y-1 transition-all">
            <Image src={consult} alt="b" />
            <h1 className="max-w-[125px] text-wrap">Consulter vos infos</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
