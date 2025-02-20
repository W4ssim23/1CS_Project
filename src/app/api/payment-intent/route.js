import { NextResponse } from "next/server";
const stripe = require("stripe");

export async function POST(request) {
  try {
    const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

    const { amount } = await request.json();

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
