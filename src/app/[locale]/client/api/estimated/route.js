import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMENI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Maximum number of retries
const MAX_RETRIES = 3;

// Default price in case of failure
const DEFAULT_PRICE = "N/A";

async function generatePriceEstimation(prompt, retries = MAX_RETRIES) {
  try {
    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    responseText = responseText.trim();

    // Remove JSON code block markers if present
    responseText = responseText.replace(/^```json|```$/g, "");

    // Attempt to parse the response as JSON
    let estimatedPrice;
    try {
      estimatedPrice = JSON.parse(responseText);
    } catch (error) {
      throw new Error("AI response is not valid JSON.");
    }

    // Validate the structure of the parsed JSON
    if (!estimatedPrice || typeof estimatedPrice.price !== "string") {
      throw new Error("Invalid JSON structure in AI response.");
    }

    return estimatedPrice;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... Attempts left: ${retries}`);
      return generatePriceEstimation(prompt, retries - 1);
    } else {
      console.error("Max retries reached. Using default price.");
      return { price: DEFAULT_PRICE };
    }
  }
}

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
      `Your response must be a valid JSON object in the following format:\n` +
      `{"price":"<price in DA>"}`;

    const estimatedPrice = await generatePriceEstimation(prompt);

    return new Response(JSON.stringify({ estimatedPrice }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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
