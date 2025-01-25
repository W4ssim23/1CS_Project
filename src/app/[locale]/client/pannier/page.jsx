import React from "react";
import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function Pannier({ searchParams }) {
  const id = searchParams.id;
  if (!id) {
    redirect("/");
  }
  let userData = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}client/pannier/${id}/`,
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
      userData = data.pannier;
    }
  } catch (e) {
    console.log(e);
  }

  if (!userData) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  if (userData.length === 0) {
    return <GotNothing />;
  }

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center p-8 gap-36">
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
          {userData.map((item, index) => (
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
        <h1 className="text-lg font-semibold">{data.artisanName}</h1>
      </div>
      <h1 className="text-lg font-semibold w-1/4 text-center">{data.title}</h1>
      <h1 className="text-lg font-semibold text-blue-800  w-1/4 text-center">
        {data.price} DA
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

import { nothing } from "@/assets/svgs";

function GotNothing() {
  return (
    <div className=" bg-white w-[90%] h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">
        Aucune <span className="text-[#FFA500]">Demande</span> a acheter en ce
        moment
      </p>
    </div>
  );
}
