import { workman } from "@/assets/svgs";
import Image from "next/image";

export default function ArtizanBlock() {
  return (
    <main className="w-full h-full sm:min-h-screen min-h-[80vh] flex flex-col items-center justify-between sm:justify-normal gap-10">
      <h1 className="sm:text-[58px] text-[40px] text-center max-w-[600px] font-bold mt-16 sm:mt-0">
        DZ-ARTISAN!
      </h1>
      <p className="text-center text-[24px] font-semibold text-[#00000052]">
        Votre passerelle vers l'excellence de l'
        <span className="text-[#FFA500]"> artisanat </span> algérien.
      </p>
      <Image src={workman} alt="workmen" priority />
    </main>
  );
}
