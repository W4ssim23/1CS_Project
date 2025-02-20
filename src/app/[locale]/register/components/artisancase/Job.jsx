import { Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

//fetshes the jobs from the api

export default function Job({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [job, setJob] = useState("");
  const handleNext = () => {
    if (!job) return;
    setData((prev) => ({ ...prev, job }));
    setStep(5);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("jobTitle")}</h1>
      <Select
        className="max-w-xs"
        label={t("jobLabel")}
        placeholder={t("jobPlaceholder")}
        onChange={(e) => setJob(e.target.value)}
      >
        {jobs.map((job) => (
          <SelectItem key={job}>{job}</SelectItem>
        ))}
      </Select>
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

const jobs = ["Maçon", "Peintre", "Électricien", "Plombier", "Menuisier"];
