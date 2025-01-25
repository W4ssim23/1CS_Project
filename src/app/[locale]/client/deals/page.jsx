import React from "react";
// import GotNothing from "./components/GotNothing";
import { redirect } from "next/navigation";

export default async function Devis({ searchParams }) {
  const id = searchParams?.id;
  if (!id) {
    redirect("/");
  }
  let dataa = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}client/${id}/deals`,
      {
        cache: "no-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      const data = await response.json();
      console.log(data.message);
    }
    const data = await response.json();
    if (data.error) {
      console.log(data.message);
    } else {
      dataa = data.deals;
    }
  } catch (e) {
    console.log(e);
  }

  if (!dataa) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
  return <DevisList data={dataa} id={id} />;
}

import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

function DevisList({ data, id }) {
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
          <h1 className="w-1/4">artisan</h1>
          <h1 className="w-1/4">travail a faire</h1>
          <h1 className="w-1/4">pourcentage</h1>
        </div>
        <div className="w-full sm:w-[80%] flex flex-col border-2 rounded-2xl overflow-hidden ">
          {data.map((item, index) => (
            <div className=" border-t-1 border-b-1 p-2 hover:bg-gray-200">
              <Item key={index} data={item} id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Item({ data, id }) {
  return (
    <div className="w-full flex items-center justify-between px-2 ">
      <div className="flex items-center gap-2 w-1/4 text-center">
        <Image src={paying} width={25} height={25} alt="b" />
        <h1 className="text-lg font-semibold">{data.artisanName}</h1>
      </div>
      <h1 className="text-lg font-semibold w-1/4 text-center">{data.title}</h1>
      <h1 className="text-lg font-semibold text-[#FFA500]  w-1/4 text-center">
        {data.pourcentage} %
      </h1>
      <div className=" w-1/4 flex items-center justify-center">
        <Link href={`deals/${data.dealId}?id=${id}&tit=${data.title}`} passHref>
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

import { nothing } from "@/assets/svgs";

function GotNothing() {
  return (
    <div className=" bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">
        Aucune <span className="text-[#FFA500]">Deal</span> en ce moment
      </p>
      <p>
        Les taches apparaîtront ici une fois qu'ils se seront ajoutés à votre
        site.
      </p>
    </div>
  );
}
