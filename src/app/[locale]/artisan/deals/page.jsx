import React from "react";
import GotNothing from "./components/GotNothing";

export default function Devis() {
  return <DevisList />;
}

import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

const data = [
  {
    id: "1",
    name: "Kanye West",
    title: "reparation de table",
    pourcentage: "70",
  },
  {
    id: "2",
    name: "Frank Ocean",
    title: "reparation de chaise",
    pourcentage: "30",
  },
  {
    id: "3",
    name: "Joji",
    title: "reparation de lit",
    pourcentage: "93",
  },
  {
    id: "4",
    name: "Lionel Messi",
    title: "fixing the sink",
    pourcentage: "50",
  },
  {
    id: "5",
    name: "Travis Scott",
    title: "painting the house",
    pourcentage: "70",
  },
];

// const data = [];

function DevisList() {
  if (data.length === 0) {
    return (
      <div className="w-[90%]">
        <GotNothing />
      </div>
    );
  }

  return (
    <div className="h-[90vh] w-full flex flex-col items-center p-8 gap-28">
      <h1 className="text-3xl font-bold w-[80%] ">
        Mes <span className="text-[#FFA500]">Travaux</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[80%] text-[#8C8C8C] font-semibold text-center flex  items-center">
          <h1 className="w-1/4">client</h1>
          <h1 className="w-1/4">travail a faire</h1>
          <h1 className="w-1/4">pourcentage</h1>
        </div>
        <div className="w-full sm:w-[80%] flex flex-col border-2 rounded-2xl overflow-hidden ">
          {data.map((item, index) => (
            <div className=" border-t-1 border-b-1 p-2 hover:bg-gray-200">
              <Item key={index} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Item({ data }) {
  return (
    <div className="w-full flex items-center justify-between px-2 ">
      <div className="flex items-center gap-2 w-1/4 text-center">
        <Image src={paying} width={25} height={25} alt="b" />
        <h1 className="text-lg font-semibold">{data.name}</h1>
      </div>
      <h1 className="text-lg font-semibold w-1/4 text-center">{data.title}</h1>
      <h1 className="text-lg font-semibold text-[#FFA500]  w-1/4 text-center">
        {data.pourcentage} %
      </h1>
      <div className=" w-1/4 flex items-center justify-center">
        <Link href={`deals/${data.id}`}>
          <Button
            className=" bg-transparent border-1 border-blue-700 text-blue-700  min-w-[120px]"
            size="lg"
            radius="lg"
          >
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
