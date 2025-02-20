"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Validate({ idOffer, idClient }) {
  const t = useTranslations("/client.Devis");
  const [loading, setLoading] = useState(false);
  const [terminated, setTerminated] = useState(false);
  const [already, setAlready] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://onecs-back.onrender.com/app/client/demand/offer-approve/${idClient}/${idOffer}/`,
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
        setAlready(true);
      }
      const data = await response.json();
      if (data.error) {
        console.log(data.message);
        setAlready(true);
      } else {
        console.log(data);
        setTerminated(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  if (terminated) {
    return (
      <div className="flex gap-2 px-6 items-center justify-end font-bold transition-all duration-250 ease-in-out text-green-500">
        <p>{t("validate.done")}</p>
      </div>
    );
  }

  if (already) {
    return (
      <div className="flex gap-2 items-center justify-end font-bold transition-all duration-250 ease-in-out text-red-500">
        <p>{t("validate.cannotPerform")}</p>
      </div>
    );
  }

  return (
    <div className="w-1/3 flex items-center justify-center">
      <Button
        className="bg-transparent border-1 border-[#FFA500] text-[#FFA500] min-w-[120px]"
        size="lg"
        radius="lg"
        onPress={handleClick}
        isLoading={loading}
      >
        {t("validate.button")}
      </Button>
    </div>
  );
}
