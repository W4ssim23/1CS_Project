import { Link } from "@/i18n/routing";
import Image from "next/image";
import { bank, profile_add, frame30085 } from "@/assets/svgs";

export default async function AdminPage() {
  const elements = [
    {
      icon: profile_add,
      title: "Ajouter un client",
      text: "Ajoutez un nouveau client en remplissant les informations nécessaires pour faciliter la gestion et le suivi de leurs demandes.",
      link: "/admin/clients",
    },
    {
      icon: bank,
      title: "Ajouter un artisan",
      text: "Ajoutez un nouvel artisan en renseignant ses informations pour l'intégrer à notre réseau et faciliter la gestion de ses services.",
      link: "/admin/artisans",
    },
    {
      icon: frame30085,
      title: "Ajouter un service",
      text: "Ajoutez un nouveau service en précisant les détails nécessaires pour le rendre disponible et accessible à nos clients.",
      link: "/admin/services",
    },
  ];
  return (
    <div className="w-full  flex flex-col items-center gap-16 sm:gap-28 text-[#4F4F4F]">
      <div className="w-full  flex flex-col items-center gap-10">
        <h1 className=" font-bold text-[22px]  sm:text-[25px] max-w-[700px] text-center">
          Bienvenue sur le tableau de bord de l'administrateur de DZ-Artisan !
        </h1>
      </div>
      <div className="flex flex-col gap-8 sm:gap-4">
        {elements.map((element, index) => (
          <Element key={index} {...element} />
        ))}
      </div>
    </div>
  );
}

function Element({ icon, title, text, link }) {
  return (
    //padding right more than left
    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-start">
      <Link href={link}>
        <div className="flex gap-6 font-semibold">
          <Image src={icon} alt={title} width={24} height={24} />
          <h1>{title}</h1>
        </div>
      </Link>
      <p className="sm:pl-10 max-w-[500px] sm:max-w-[700px]">{text}</p>
    </div>
  );
}
