import React from "react";
import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Button } from "@nextui-org/react";

const data = [
  {
    name: "Kanye West",
    title: "reparation de table",
    price: "1500 DA",
  },
  {
    name: "Frank Ocean",
    title: "reparation de chaise",
    price: "1000 DA",
  },
  {
    name: "Joji",
    title: "reparation de lit",
    price: "2000 DA",
  },
];

export default function Pannier() {
  return (
    <div className="h-[90vh] w-full flex flex-col items-center p-8 gap-36">
      <h1 className="text-3xl font-bold w-[80%] ">
        Mon <span className="text-[#FFA500]">pannier</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[80%] text-[#8C8C8C] font-semibold text-center flex  items-center">
          <h1 className="w-1/4">artisan</h1>
          <h1 className="w-1/4">travail a faire</h1>
          <h1 className="w-1/4">cout</h1>
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
      <h1 className="text-lg font-semibold text-blue-800  w-1/4 text-center">
        {data.price}
      </h1>
      <div className=" w-1/4 flex items-center justify-center">
        <Button
          className=" bg-transparent border-1 border-[#FFA500] text-[#FFA500]  min-w-[120px]"
          size="lg"
          radius="lg"
        >
          acheter
        </Button>
      </div>
    </div>
  );
}
