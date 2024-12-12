import Image from "next/image";
import { adembell, ahmadmuli, mariajhon } from "@/assets/images";

export default function ExpertsBlock() {
  const pics = [ahmadmuli, adembell, mariajhon];
  const experts = ["Ahmed Muli", "Adem Bell", "Maria Jhon"];
  const descriptions = [
    "Un menuisier professionnel doté de plus de 10 ans d'expérience dans le domaine.",
    "Un électricien qualifié avec 7 ans d'expérience dans le domaine.",
    "Un plombier certifié, fort de 9 ans d'expérience dans le métier.",
  ];

  return (
    <main className="flex flex-col w-full h-fit min-h-lvh items-center gap-10">
      <p className="text-[30px] mt-3 sm:mt-0 sm:text-[40px] text-center max-w-[588px] font-bold text-[#1F4690]">
        NOS EXPERTS
      </p>
      <p className="text-[19px] sm:text-[24px] text-center max-w-[1200px] font-semibold ">
        Faites confiance à l'expertise de nos professionnels qualifiés, riches
        d'années d'expérience dans leurs domaines respectifs.
      </p>
      <div className="flex flex-col sm:flex-row gap-20">
        {pics.map((pic, index) => (
          <ExpertCard
            key={index}
            pic={pic}
            title={experts[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
    </main>
  );
}

function ExpertCard({ pic, title = "", description = "" }) {
  return (
    <main className="flex flex-col items-center gap-2">
      <Image src={pic} alt={title} className="" />
      <p className="text-[20px]  font-bold text-black ">{title}</p>
      <p className="text-[16px]  font-semibold text-[#00000070] max-w-[280px] text-center">
        {description}
      </p>
    </main>
  );
}
