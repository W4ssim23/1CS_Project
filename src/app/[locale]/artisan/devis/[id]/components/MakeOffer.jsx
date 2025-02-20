"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { GlobalContext } from "@/app/[locale]/context";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function MakeOffer({ offerId }) {
  const t = useTranslations("/artisan.MakeOffer");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userData } = useContext(GlobalContext);

  const router = useRouter();

  const handleSubmit = async () => {
    setError(null);

    if (!userData) {
      setError(t("errors.userDataMissing"));
      return;
    }

    if (!price || isNaN(Number(price))) {
      setError(t("errors.invalidPrice"));
      return;
    }

    const offerData = {
      artisanId: userData.idUser,
      price: Number(price),
    };

    setLoading(true);
    try {
      console.log(
        "Submitting offer:",
        offerData,
        "https://onecs-back.onrender.com/app/artisan/one-devis/${offerId}/offer/"
      );
      const response = await fetch(
        `https://onecs-back.onrender.com/app/artisan/one-devis/${offerId}/offer/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(offerData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Offer submitted successfully:", result);
        router.back();
      } else {
        console.error("Error:", result);
        setError(result.message || t("errors.genericError"));
      }
    } catch (error) {
      console.error("Error:", error);
      setError(t("errors.genericError"));
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setPrice(e.target.value);
    setError(null);
  };

  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-end gap-5">
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}

      <div className="max-w-[200px] rounded-xl border-1">
        <input
          onChange={handleInputChange}
          placeholder={t("inputPlaceholder")}
          type="number"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4690]"
        />
      </div>
      <Button
        className="bg-transparent text-[#1F4690] border-1 border-[#1F4690]"
        size="lg"
        radius="lg"
        onPress={handleSubmit}
        isLoading={loading}
      >
        {t("makeOfferButton")}
      </Button>
    </div>
  );
}
