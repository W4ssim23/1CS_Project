import React from "react";
import Image from "next/image";
import { paying } from "@/assets/svgs";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function Pannier({ searchParams, params }) {
  const t = await getTranslations("/client.Pannier");
  const id = searchParams.id;
  if (!id) {
    redirect("/");
  }
  let userData = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/client/pannier/${id}/`,
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
      console.log(userData);
    }
  } catch (e) {
    console.log(e);
  }

  if (!userData) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>{t("failedToLoad")}</p>
      </div>
    );
  }

  if (userData.length === 0) {
    return <GotNothing />;
  }

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center p-8 gap-36">
      <h1 className="text-3xl font-bold w-[80%]">
        {t("title1")} <span className="text-[#FFA500]">{t("title2")}</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[80%] text-[#8C8C8C] font-semibold text-center flex items-center">
          <h1 className="w-1/4">{t("columns.artisan")}</h1>
          <h1 className="w-1/4">{t("columns.workToDo")}</h1>
          <h1 className="w-1/4">{t("columns.cost")}</h1>
        </div>
        <div className="w-full sm:w-[80%] flex flex-col border-2 rounded-2xl overflow-hidden">
          {userData.map((item, index) => (
            <div
              className="border-t-1 border-b-1 p-2 hover:bg-gray-200"
              key={index}
            >
              <Item key={index} data={item} clientId={id} params={params} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Item({ data, clientId, params }) {
  const t = useTranslations("/client.Pannier");
  return (
    <div className="w-full flex items-center justify-between px-2">
      <div className="flex items-center gap-2 w-1/4 text-center">
        <Image src={paying} width={25} height={25} alt="b" />
        <h1 className="text-lg font-semibold">
          {data.artisanFirstName + " " + data.artisanLastName}
        </h1>
      </div>
      <h1 className="text-lg font-semibold w-1/4 text-center">{data.title}</h1>
      <h1 className="text-lg font-semibold text-blue-800 w-1/4 text-center">
        {data.price} DA
      </h1>
      {data.paymentStatus === "not_paid" && (
        <BuyModel
          clientId={clientId}
          travailId={data.id}
          amount={data.price}
          params={params}
        />
      )}
      {data.paymentStatus !== "not_paid" && (
        <h1 className="text-lg font-semibold text-green-600 w-1/4 text-center">
          {t("paidStatus")}
        </h1>
      )}
    </div>
  );
}

import { nothing } from "@/assets/svgs";
import BuyModel from "./components/BuyModel";
import { useTranslations } from "next-intl";

function GotNothing() {
  const t = useTranslations("/client.Pannier");
  return (
    <div className="bg-white w-[90%] h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noDemands.title1")}{" "}
        <span className="text-[#FFA500]">{t("noDemands.title2")}</span>
      </p>
    </div>
  );
}
