import { rb_33 } from "@/assets/svgs";
import Image from "next/image";

export default function MissionBlock() {
  return (
    <main className="w-full h-full sm:min-h-screen flex sm:flex-row flex-col-reverse  items-center justify-evenly gap-10 bg-[#F4F4F4] py-8 sm:py-0">
      <div className="flex flex-col h-full items-center justify-center gap-10">
        <h1 className="text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
          Notre mission
        </h1>
        <p className="sm:text-start text-center sm:text-[24px] font-semibold text-[#00000052] w-[70%] sm:w-[100%] max-w-[510px]">
          Notre mission chez DZ Artisan est de renforcer le lien entre les
          artisans algériens et leurs clients en offrant une plateforme
          transparente, fiable et accessible. Nous visons à soutenir les
          artisans locaux en leur offrant une visibilité accrue tout en
          simplifiant l'expérience des clients à la recherche de services
          artisanaux de qualité. À travers notre application, nous nous
          engageons à promouvoir l'authenticité, l'excellence et le respect des
          traditions, tout en créant une communauté dynamique et solidaire.
        </p>
      </div>
      <Image src={rb_33} alt="rb_33" />
    </main>
  );
}
