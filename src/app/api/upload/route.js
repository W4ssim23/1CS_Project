import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { file } = body;

    if (!file) {
      return new Response(
        JSON.stringify({ error: "Missing required field: file" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const uploadedResponse = await cloudinary.v2.uploader.upload(file);

    if (uploadedResponse.secure_url) {
      return new Response(
        JSON.stringify({ url: uploadedResponse.secure_url }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      throw new Error("Failed to upload image to Cloudinary.");
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
