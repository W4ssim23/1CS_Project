import React from "react";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function Devis({ searchParams }) {
  const t = await getTranslations("/client.Devis");
  const id = searchParams?.id;
  if (!id) {
    redirect("/");
  }
  let dataa = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/client/${id}/deals`,
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
      console.log(dataa);
    }
  } catch (e) {
    console.log(e);
  }

  if (!dataa) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>{t("failedToLoad")}</p>
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
  const t = useTranslations("/client.Devis");
  if (data.length === 0) {
    return (
      <div className="w-[90%]">
        <GotNothing />
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center p-8 gap-28">
      <h1 className="text-3xl font-bold w-[80%] ">
        {t("title1")} <span className="text-[#FFA500]">{t("title2")}</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[80%] text-[#8C8C8C] font-semibold text-center flex items-center">
          <h1 className="w-1/4">{t("columns.artisan")}</h1>
          <h1 className="w-1/4">{t("columns.workToDo")}</h1>
          <h1 className="w-1/4">{t("columns.percentage")}</h1>
        </div>
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
      </div>
    </div>
  );
}

function Item({ data, id }) {
  const t = useTranslations("/client.Devis");
  return (
    <div className="w-full flex items-center justify-between px-2">
      <div className="flex items-center gap-2 w-1/4 text-center">
        <Image src={paying} width={25} height={25} alt="b" />
        <Link
          href={`deals/portfolio/${data.artisanId}?id=${id}&tit=${data.title}`}
        >
          <h1 className="text-lg font-semibold hover:underline">
            {data.artisanName}
          </h1>
        </Link>
      </div>
      <h1 className="text-lg font-semibold w-1/4 text-center">{data.title}</h1>
      <h1 className="text-lg font-semibold text-[#FFA500] w-1/4 text-center">
        {data.pourcentage} %
      </h1>
      <div className="w-1/4 flex items-center justify-center">
        <Link href={`deals/${data.dealId}?id=${id}&tit=${data.title}`} passHref>
          <Button
            className="bg-transparent border-1 border-blue-700 text-blue-700 min-w-[120px]"
            size="lg"
            radius="lg"
          >
            {t("detailsButton")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

import { nothing } from "@/assets/svgs";
import { useTranslations } from "next-intl";

function GotNothing() {
  const t = useTranslations("/client.Devis");
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noDeals.title1")}{" "}
        <span className="text-[#FFA500]">{t("noDeals.title2")}</span>
      </p>
      <p>{t("noDeals.description")}</p>
    </div>
  );
}
