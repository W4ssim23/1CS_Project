import Image from "next/image";
import { nothing } from "@/assets/svgs";
import TheList from "./TheList";

export default function ListArtisan() {
  //get this variable from the locale context
  // const artisans = [];
  const artisans = [
    {
      name: "Lionel Messi",
      artisanId: "ART-125",
      email: "aa@c.aa",
      phone: "101010101010",
      genre: "Homme",
      status: "Actif",
      avatar:
        "https://yop.l-frii.com/wp-content/uploads/2024/10/Le-premier-contrat-de-Lionel-Messi-avec-le-FC-Barcelone-a-ete-signe-sur-une-serviette-en-papier-retour-sur-les-debuts-incroyables-de-la-Pulga-1024x640.jpg",
    },
    {
      name: "Coco Chanel",
      artisanId: "ART-126",
      email: "aa@a.aa",
      phone: "123456789",
      genre: "Femme",
      status: "Actif",
      avatar:
        "https://resize.elle.fr/square/var/plain_site/storage/images/mode/les-news-mode/19-aout-1883-c-est-ce-jour-la-que-nait-coco-chanel-3140479/68578186-1-fre-FR/19-aout-1883-c-est-ce-jour-la-que-nait-Coco-Chanel.jpg",
    },
    {
      name: "Kanye west",
      artisanId: "ART-127",
      email: "aa@a.aa",
      phone: "123456789",
      genre: "Homme",
      status: "Actif",
      avatar:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/10/kanye-west-triste.jpg",
    },
    {
      name: "Frankou",
      artisanId: "ART-128",
      email: "aa@a.aa",
      phone: "123456789",
      genre: "Homme",
      status: "Inactif",
      avatar:
        "https://lastfm.freetls.fastly.net/i/u/ar0/c727ac2a12a296b7f62549def8d6b537.jpg",
    },
    {
      name: "Akira Akao",
      artisanId: "ART-129",
      email: "aa@a.aa",
      phone: "123456789",
      genre: "Femme",
      status: "Actif",
      avatar:
        "https://i.pinimg.com/474x/53/4f/29/534f2998608e8132cd84fc8c18030c77.jpg",
    },
  ];

  if (!artisans.length) return <GotNothing />;

  return <TheList artisans={artisans} />;
}

function GotNothing() {
  return (
    <div className=" bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">
        Aucun <span className="text-[#FFA500]">Artisan</span> en ce moment
      </p>
      <p>
        Les artisans apparaîtront ici une fois qu'ils se seront ajoutés à votre
        site.
      </p>
    </div>
  );
}
