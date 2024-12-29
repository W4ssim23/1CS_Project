import { SearchInput } from "@/components/ui";
import Image from "next/image";
import {
  elements,
  electrichome01,
  home05,
  paintbrush02,
  waterpump,
} from "@/assets/svgs";

import { Link } from "@/i18n/routing";

export default function SearchBlock() {
  const artisansPics = [
    elements,
    electrichome01,
    home05,
    paintbrush02,
    waterpump,
  ];
  const artisansLabels = [
    "maçon",
    "peintre",
    "electrécien",
    "plombier",
    "menuisier",
  ];
  return (
    <main className="flex flex-col w-full h-fit">
      <div className="h-full flex flex-col w-full items-center justify-center min-h-[60lvh] sm:min-h-[80lvh] bg-[#1F4690] gap-24">
        <p className=" text-[30px] mt-3 sm:mt-0 sm:text-[58px] text-center max-w-[800px] font-bold text-white motion-preset-blur-right motion-duration-900">
          Trouvez et Engagez les meilleurs
          <span className="text-[#FFA500]"> Artisans </span>
          en Algérie
        </p>
        <SearchInput
          styling="max-w-[750px] min-w-[60%] md:min-w-[55%]  md:w-full"
          placeHolder="Chercher sur DZ ARTISAN...."
        />
      </div>
      <div className="flex flex-wrap sm:flex-nowrap w-full justify-center gap-16 md:gap-32 sm:min-h-[40lvh] py-16 sm:py-0">
        {artisansPics.map((pic, index) => (
          <ArtisanBlock
            key={index}
            picture={pic}
            label={artisansLabels[index]}
          />
        ))}
      </div>
    </main>
  );
}

function ArtisanBlock({ picture, label }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Link href="#" alt={label}>
        <div className="flex items-center justify-center w-12 h-12 sm:w-24 sm:h-24 bg-[#FFA500] p-2 sm:p-4 rounded-xl cursor-pointer">
          <Image src={picture} alt={label} />
        </div>
      </Link>
      <p className="text-center text-xs xs:text-base">{label}</p>
    </div>
  );
}
