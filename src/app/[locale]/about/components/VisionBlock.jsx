import { vision } from "@/assets/svgs";
import Image from "next/image";

export default function VisionBlock() {
  return (
    <main className="w-full h-full sm:min-h-screen flex sm:flex-row flex-col items-center justify-evenly gap-10 py-8 sm:py-0">
      <Image src={vision} alt="vision" />
      <div className="flex flex-col h-full items-center justify-center gap-10">
        <h1 className="text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
          Notre vision
        </h1>
        <p className="sm:text-start text-center sm:text-[24px] font-semibold text-[#00000052] w-[70%] sm:w-[100%] max-w-[510px]">
          Chez DZ Artisan, notre vision est de créer un pont solide entre les
          clients et les artisans de toute l'Algérie. Nous aspirons à valoriser
          l'artisanat local en offrant une plateforme intuitive où les
          utilisateurs peuvent facilement découvrir et collaborer avec des
          artisans talentueux. Nous sommes déterminés à promouvoir le
          savoir-faire traditionnel tout en facilitant l'accès aux services
          artisanaux, contribuant ainsi à un avenir prospère pour l'artisanat
          algérien
        </p>
      </div>
    </main>
  );
}
