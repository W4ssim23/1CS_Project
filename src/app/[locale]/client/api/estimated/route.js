import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMENI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req) {
  try {
    const body = await req.json();

    const { artisanJob, title, description } = body;

    if (!artisanJob || !title || !description) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const prompt =
      `You are an expert pricing assistant. Provide an estimated price for a service in Algeria. ` +
      `Base the estimation on the Algerian market. ` +
      `Respond only with a JSON object containing the price in Algerian Dinars (DA). ` +
      `Here are the details of the service:\n\n` +
      `Artisan Job: ${artisanJob}\n` +
      `Title: ${title}\n` +
      `Description: ${description}\n\n` +
      `Your response should be in the following format:\n` +
      `{"price":"<price in DA>"}`;

    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    // console.log("Raw AI response:", responseText);

    responseText = responseText.trim();
    responseText = responseText.replace(/^```json|```$/g, "");

    // console.log("Sanitized AI response:", responseText);

    const estimatedPrice = JSON.parse(responseText);

    if (estimatedPrice.price) {
      return new Response(JSON.stringify({ estimatedPrice }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      throw new Error("Invalid JSON structure in AI response.");
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
