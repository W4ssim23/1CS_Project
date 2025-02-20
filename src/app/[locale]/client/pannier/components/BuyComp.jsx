"use client";
import React from "react";
import CheckoutPage from "./CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("use public key :)");

export default function BuyComp({ travailId, clientId, amount, params }) {
  function convertToSubcurrency(amount, factor = 100) {
    return Math.round(amount * factor);
  }

  return (
    <div className="flex items-center justify-center">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage
          travailId={travailId}
          clientId={clientId}
          amount={amount}
          params={params}
        />
      </Elements>
    </div>
  );
}
