import Image from "next/image";
import { nothing } from "@/assets/svgs";
import TheList from "./TheList";

export default function ListClient() {
  //get this variable from the locale context
  // const clients = [];
  const clients = [
    {
      name: "Cristiano Ronaldo",
      clientId: "CLT-125",
      email: "cr7@sports.com",
      phone: "777777777",
      genre: "Homme",
      status: "Actif",
      avatar:
        "https://www.sportico.com/wp-content/uploads/2024/09/GettyImages-1734016483-e1726177787958.jpg?w=1280&h=719&crop=1",
    },
    {
      name: "Marie Curie",
      clientId: "CLT-126",
      email: "marie@science.com",
      phone: "123098765",
      genre: "Femme",
      status: "Actif",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/640px-Marie_Curie_c1920.jpg",
    },
    {
      name: "Albert Einstein",
      clientId: "CLT-127",
      email: "einstein@physics.com",
      phone: "987654321",
      genre: "Homme",
      status: "Inactif",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/640px-Albert_Einstein_1947.jpg",
    },
    {
      name: "Frida Kahlo",
      clientId: "CLT-128",
      email: "frida@art.com",
      phone: "456789123",
      genre: "Femme",
      status: "Actif",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oF_bbuzfs33I7f-2Dkvtw6FCNk3hKKyUXQ&s",
    },
    {
      name: "Elon Musk",
      clientId: "CLT-130",
      email: "elon@tesla.com",
      phone: "555123456",
      genre: "Homme",
      status: "Actif",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
  ];

  if (!clients.length) return <GotNothing />;

  return <TheList clients={clients} />;
}

function GotNothing() {
  return (
    <div className=" bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">Aucun Client en ce moment</p>
      <p>
        Les clients apparaîtront ici une fois qu'ils se seront ajoutés à votre
        site.
      </p>
    </div>
  );
}
