import { Button } from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Certificate({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [isCertified, setIsCertified] = useState("notYet");
  const [file, setFile] = useState(null);
  const handleNext = () => {
    if (isCertified === "true" && !file) return;
    setData((prev) => ({
      ...prev,
      certificated: isCertified === "true",
      certification_files: [file],
    }));
    setStep(6);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("certifiedTitle")}</h1>
      <div className="flex flex-col gap-1">
        <label>
          <input
            className="mr-2"
            type="radio"
            name="cert"
            value="certified"
            onChange={(e) => setIsCertified("true")}
          />
          {t("yes")}
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            name="cert"
            value="notCertified"
            onChange={(e) => setIsCertified("false")}
          />
          {t("no")}
        </label>
      </div>
      {isCertified === "true" && (
        <FileUploader
          className="bg-white rounded-xl"
          handleChange={(file) => setFile(file)}
          children={
            <div className="w-full h-full flex items-center justify-evenly min-w-[222px] rounded-md shadow-md bg-white p-2">
              <h1 className="text-center font-medium">{t("upload")}</h1>
            </div>
          }
        />
      )}
      <Button
        className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[222px]"
        size="lg"
        radius="sm"
        onClick={handleNext}
      >
        {t("nextButton")}
      </Button>
    </div>
  );
}
