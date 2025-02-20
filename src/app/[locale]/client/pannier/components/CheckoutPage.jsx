"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { LoadingSpinner } from "@/components/ui";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const CheckoutPage = ({ amount, travailId, clientId, params }) => {
  const t = useTranslations("/client.CheckoutPage");
  function convertToSubcurrency(amount, factor = 100) {
    return Math.round(amount * factor);
  }

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `https://onecs-project.onrender.com/${params.locale}/client/pannier/payed?amount=${amount}&travailId=${travailId}&clientId=${clientId}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return <LoadingSpinner />;
  }

  return (
    <form className="bg-white p-2 rounded-md flex flex-col gap-2">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <Button
        isLoading={!stripe || loading}
        onClick={handleSubmit}
        radius="lg"
        className="text-blue-500 border-blue-500 border-1 bg-transparent w-full p-5 mt-2 rounded-md font-bold"
      >
        {!loading ? `${t("payButton")} ${amount} DA` : t("processing")}
      </Button>
    </form>
  );
};

export default CheckoutPage;
