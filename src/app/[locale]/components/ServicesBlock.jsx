import { comm1, comm2, comm3 } from "@/assets/svgs";
import { Link } from "@/i18n/routing";

export default function ServiceBlock() {
  const pics = [comm1, comm2, comm3];
  const titles = [
    "Recherche simple",
    "Messagerie integree",
    "Selection simple",
  ];
  const descriptions = [
    "Utilisez la barre de recherche ou explorez les catégories du menu de navigation pour accéder à votre service.",
    "Contactez des professionnels directement grâce à la messagerie intégrée.",
    "Sélectionnez un service selon les évaluations et les avis, ou affinez votre recherche avec des filtres comme « peintre ».",
  ];
  return (
    <main className="flex flex-col w-full h-fit min-h-lvh items-center gap-28">
      <p className="text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
        DZ-ARTISAN, comment ça marche?
      </p>
      <div className="flex flex-col sm:flex-row gap-14 sm:gap-20">
        {pics.map((pic, index) => (
          <ServiceExplain
            key={index}
            pic={pic}
            title={titles[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
      <p className="text-center max-w-[480px] text-[18px] font-semibold text-[#00000052]">
        En cas de problème, n'hésitez pas à{" "}
        <Link href="#" alt="contact" className="text-[#1F4690] underline">
          {" "}
          nous contacter
        </Link>{" "}
        pour obtenir de l'aide.
      </p>
    </main>
  );
}

import Image from "next/image";

function ServiceExplain({ pic, title = "", description = "" }) {
  return (
    <main className="flex flex-col items-center gap-8 sm:gap-2 sm:h-72">
      <Image src={pic} alt={title} className="h-[45%]" />
      <p className="text-[20px]  font-bold text-black ">{title}</p>
      <p className="text-[16px]  font-semibold text-[#00000070] max-w-[280px] text-center">
        {description}
      </p>
    </main>
  );
}
