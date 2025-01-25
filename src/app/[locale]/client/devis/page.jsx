import React from "react";
import GotNothing from "./components/GotNothing";
import AddDevis from "./components/AddDevis";

import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

import { redirect } from "next/navigation";

export default async function Devis({ searchParams }) {
  const id = searchParams?.id;
  if (!id) {
    redirect("/");
  }
  let devis = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}client/current-demands/${id}/`,
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
    console.log(data);
    if (data.error) {
      console.log(data.message);
    } else {
      devis = data.demands;
    }
  } catch (e) {
    console.log(e);
  }

  if (!devis) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  if (devis.length === 0)
    return (
      <div className="flex flex-col w-[80%] gap-4">
        <AddDevis />
        <GotNothing />
      </div>
    );

  return (
    <div className="flex flex-col w-[80%] gap-6 pb-4 h-[95vh] justify-start">
      <AddDevis searchParams={searchParams} />
      <div className="flex flex-col w-full gap-14">
        {devis.map((item, index) => (
          <DevisItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

function DevisItem({ data }) {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h1 className="text-lg font-bold w-[85%] ">
        Les reponse aux demande de{" "}
        <span className="text-[#FFA500]">{data.title}</span>
      </h1>
      <Offers data={data.offers} />
    </div>
  );
}

function Offers({ data }) {
  if (data.length === 0) {
    return (
      <div className="font-semibold text-center text-gray-500 text-lg ">
        <p>No Offers On this Demand yet</p>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-[80%] flex flex-col border-2 rounded-2xl overflow-hidden ">
      {data.map((item, index) => (
        <div className=" border-t-1 border-b-1 p-2 hover:bg-gray-200">
          <Item key={index} data={item} />
        </div>
      ))}
    </div>
  );
}

function Item({ data }) {
  return (
    <div className="w-full flex items-center justify-between px-2 ">
      <div className="flex items-center gap-2 w-1/3 text-center">
        <Image src={paying} width={25} height={25} alt="a" />
        {/* redirect on click to the artisan portfolio */}
        <Link href={"#"}>
          <h1 className="text-lg font-semibold">{data.name}</h1>
        </Link>
      </div>
      <h1 className="text-lg font-semibold text-blue-800  w-1/3 text-center">
        {data.price}
      </h1>
      <div className=" w-1/3 flex items-center justify-center">
        <Button
          className=" bg-transparent border-1 border-[#FFA500] text-[#FFA500]  min-w-[120px]"
          size="lg"
          radius="lg"
        >
          Validé l’offre
        </Button>
      </div>
    </div>
  );
}
