"use client";

import { Link } from "@/i18n/routing";
import { Select, SelectItem, Button, Input, Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewDevis({ searchParams }) {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const [loadingPrice, setLoadingPrice] = useState(false);
  const [loadingDescription, setLoadingDescription] = useState(false);
  const [jobLoading, setJobLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const router = useRouter();

  const handlePrice = async (job, title, description) => {
    if (!job || !title || !description) {
      console.error("Missing required fields");
      return;
    }

    const requestBody = {
      artisanJob: job,
      title: title,
      description: description,
    };

    try {
      setLoadingPrice(true);
      const response = await fetch("/fr/client/api/estimated", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        setLoadingPrice(false);
        console.log(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      //   console.log("Estimated Price:", data.estimatedPrice);
      setEstimatedPrice(data.estimatedPrice.price);
      setLoadingPrice(false);
    } catch (error) {
      console.error("Error fetching estimated price:", error);
      setLoadingPrice(false);
    }
  };

  const handleDescription = async (job, title, description) => {
    const requestBody = {
      artisanJob: job,
      title: title,
      description: description,
    };

    setLoadingDescription(true);
    try {
      const response = await fetch("/fr/client/api/aproveDescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
        setLoadingDescription(false);
        return;
      }

      const data = await response.json();
      console.log("Generated Description:", data.newDescription.description);
      setDescription(data.newDescription.description);
      setLoadingDescription(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoadingDescription(false);
    }
  };

  const handleJobs = async () => {
    setJobLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}jobs/`, {
        method: "GET",
      });

      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        setError("An error occurred, you might refresh the page");
        return;
      }

      const data = await response.json();
      setJobs(data.job_names);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setJobLoading(false);
    }
  };

  const handleSend = async () => {
    if (!job || !title || !description) {
      setError("All fields are required");
      return;
    }

    const requestBody = {
      user_id: searchParams.id,
      job: job,
      title: title,
      description: description,
      estimatedPrice: estimatedPrice,
    };
    console.log("Request body:", requestBody);
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}client/new-demand/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        setError("An error occurred");
        return;
      }

      const data = await response.json();
      // console.log("Devis sent:", data);
      router.back();
    } catch (error) {
      console.error("Error sending devis:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleJobs();
  }, []);

  return (
    <div className="h-full w-full flex flex-col p-8 gap-4">
      <h1 className="text-3xl font-bold">
        Demande de <span className=" text-[#FFA500]">devis</span>
      </h1>
      <div className="flex flex-col gap-12 bg-[#E9E9E9] px-16 py-8 items-center justify-center rounded-2xl">
        <Input
          label="Titre de la demande de devis"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select
          isLoading={jobLoading}
          className=""
          label="selectionnée le type d’artisan que vous voulez solicité"
          onChange={(e) => setJob(e.target.value)}
        >
          {jobs.map((job) => (
            <SelectItem key={job}>{job}</SelectItem>
          ))}
        </Select>
        <div className="flex flex-col gap-4 w-full items-center md:items-start">
          <Textarea
            label="veuillez decrir votre besoin"
            className=""
            minRows={6}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {description && (
            <Button
              className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px]  min-w-[200px]"
              size="lg"
              radius="lg"
              onClick={() => handleDescription(job, title, description)}
              isLoading={loadingDescription}
            >
              enchancer la description ?
            </Button>
          )}
        </div>
        {error && <p className="text-red-600 text-lg">{error}</p>}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center">
            <Button
              className=" bg-transparent border-1 border-[#FFA500] text-[#FFA500]   max-w-[360px]  min-w-[200px]"
              size="lg"
              radius="lg"
              onClick={() => handlePrice(job, title, description)}
              isLoading={loadingPrice}
            >
              estimer le prix
            </Button>
            {estimatedPrice && (
              <p className="text-green-600 text-lg ml-4 text-nowrap">
                {estimatedPrice} DA
              </p>
            )}
          </div>
          <div className="flex gap-8 justify-center">
            <Link href="/client/devis">
              <Button
                className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px]  min-w-[200px]"
                size="lg"
                radius="lg"
              >
                Annuler
              </Button>
            </Link>

            <Button
              className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[200px]"
              size="lg"
              radius="lg"
              onPress={handleSend}
              isLoading={loading}
            >
              envoyer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
