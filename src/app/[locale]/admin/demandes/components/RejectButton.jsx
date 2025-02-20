import React from "react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function RejectButton({ setAppearence, id }) {
  const t = useTranslations("/admin.ArtisanValidation");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://onecs-back.onrender.com/app/refuser-artisan/${id}/`,
        {
          cache: "no-cache",
          method: "POST",
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
        setAppearence(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="bg-red-500 text-white px-4 py-2"
      radius="lg"
      onPress={handleClick}
      isLoading={loading}
    >
      {t("rejectButton")}
    </Button>
  );
}
