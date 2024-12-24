import Image from "next/image";
import { nothing } from "@/assets/svgs";

export default function GotNothing() {
  return (
    <div className=" bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">
        Aucun <span className="text-[#FFA500]">Service</span> en ce moment
      </p>
      <p>
        Les services apparaîtront ici une fois qu'ils se seront ajoutés à votre
        site.
      </p>
    </div>
  );
}
