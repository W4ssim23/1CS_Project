import React from "react";
import GotNothing from "./components/GotNothing";
import AddDevis from "./components/AddDevis";
import Image from "next/image";
import { paying } from "@/assets/svgs";
import { Link } from "@/i18n/routing";
import { redirect } from "next/navigation";
import Validate from "./components/Validate";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export default async function Devis({ searchParams }) {
  const t = await getTranslations("/client.Devis");
  const id = searchParams?.id;
  if (!id) {
    redirect("/");
  }
  let devis = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/client/current-demands/${id}/`,
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
      console.log(devis.demandes);
    }
  } catch (e) {
    console.log(e);
  }

  if (!devis) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>{t("failedToLoad")}</p>
      </div>
    );
  }

  if (devis.length === 0)
    return (
      <div className="flex flex-col w-[80%] gap-4">
        <AddDevis id={id} />
        <GotNothing />
      </div>
    );

  return (
    <div className="flex flex-col w-[80%] gap-6 pb-4 h-[95vh] justify-start">
      <AddDevis id={id} />
      <div className="flex flex-col w-full gap-14">
        {devis.map((item, index) => (
          <DevisItem key={index} data={item} id={id} />
        ))}
      </div>
    </div>
  );
}

function DevisItem({ data, id }) {
  const t = useTranslations("/client.Devis");
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h1 className="text-lg font-bold w-[85%]">
        {t("responsesToDemand")}{" "}
        <span className="text-[#FFA500]">{data.title}</span>
      </h1>
      <Offers data={data.offers} id={id} />
    </div>
  );
}

function Offers({ data, id }) {
  const t = useTranslations("/client.Devis");
  if (data.length === 0) {
    return (
      <div className="font-semibold text-center text-gray-500 text-lg">
        <p>{t("noOffers")}</p>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-[80%] flex flex-col border-2 rounded-2xl overflow-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-t-1 border-b-1 p-2 hover:bg-gray-200"
        >
          <Item data={item} id={id} />
        </div>
      ))}
    </div>
  );
}

function Item({ data, id }) {
  const t = useTranslations("/client.Devis");
  return (
    <div className="w-full flex items-center justify-between px-2">
      <div className="flex items-center gap-2 w-1/3 text-center">
        <Image src={paying} width={25} height={25} alt="a" />
        <Link href={`devis/${data.artisanId}?id=${id}`}>
          <h1 className="text-lg font-semibold hover:underline">
            <span className="text-gray-500 mx-1">{t("artisanLabel")}</span>{" "}
            {data.artisanName}
          </h1>
        </Link>
      </div>
      <h1 className="text-lg font-semibold text-blue-800 w-1/3 text-center">
        <span className="text-gray-500 mx-1">{t("priceLabel")}</span>
        {data.price} DA
      </h1>
      <Validate idOffer={data.idOffer} idClient={id} />
    </div>
  );
}
