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
      `You are an expert pricing assistant.` +
      `Its your job to provide a better description of the service asked by the client .` +
      `The description have to be clear and more precise so other experts like you can understand it and estimate the right price for the service` +
      `Respond only with a JSON object containing the unchanced description.` +
      `Here are the details of the service:\n\n` +
      `Artisan Job: ${artisanJob}\n` +
      `Title: ${title}\n` +
      `Description: ${description}\n\n` +
      `Your response should be in the following format:\n` +
      `{"description":"<description string>"}\n` +
      `And the response should be with the same language as the description sent by the client.`;

    const result = await model.generateContent(prompt);
    let responseText = result.response.text();

    responseText = responseText.trim();
    responseText = responseText.replace(/^```json|```$/g, "");

    const newDescription = JSON.parse(responseText);

    if (newDescription.description) {
      return new Response(JSON.stringify({ newDescription }), {
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
