"use client";

import { Button } from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Assurence({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleNext = async () => {
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ file: base64data }),
        });
        const data = await response.json();
        if (response.ok) {
          setData((prev) => ({
            ...prev,
            insurance_urls: [data.url],
            is_assured: true,
          }));
          setStep(7);
        } else {
          console.error("Upload failed:", data.error);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setUploading(false);
      }
    };
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("insuranceTitle")}</h1>
      <FileUploader
        className="bg-white rounded-xl"
        handleChange={(file) => setFile(file)}
        children={
          <div className="w-full h-full flex items-center justify-evenly min-w-[222px] rounded-md shadow-md bg-white p-2">
            <h1 className="text-center font-medium">{t("upload2")}</h1>
          </div>
        }
      />
      <Button
        className="bg-[#1F4690] text-white max-w-[360px] min-w-[222px]"
        size="lg"
        radius="sm"
        onClick={handleNext}
        isLoading={uploading}
      >
        {t("nextButton")}
      </Button>
    </div>
  );
}
