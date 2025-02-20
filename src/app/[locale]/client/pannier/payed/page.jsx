import React from "react";
import { getTranslations } from "next-intl/server";

//to add security and fail case later

export default async function PaymentSuccess({ searchParams }) {
  const t = await getTranslations("/client.PaymentSuccess");
  const { amount, travailId, clientId } = searchParams;

  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/client/pannier/${travailId}/mark_payed/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log("Travail marked as paid.");
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.log("lahna");
    console.error("Error:", error);
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">{t("thankYou")}</h1>
        <h2 className="text-2xl">{t("successMessage")}</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          {amount} DA
        </div>
      </div>
    </main>
  );
}
