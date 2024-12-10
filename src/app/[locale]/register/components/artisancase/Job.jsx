import { Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";

//fetshes the jobs from the api

export default function Job({ setStep, setData }) {
  const [job, setJob] = useState("");
  const handleNext = () => {
    if (!job) return;
    setData((prev) => ({ ...prev, job }));
    setStep(5);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">
        quel est votre metier?
      </h1>
      <Select
        className="max-w-xs"
        label="Metier"
        placeholder="Selectionner votre metier"
        onChange={(e) => setJob(e.target.value)}
      >
        {jobs.map((job) => (
          <SelectItem key={job.key}>{job.label}</SelectItem>
        ))}
      </Select>
      <Button
        className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[222px]"
        size="lg"
        radius="sm"
        onClick={handleNext}
      >
        suivant
      </Button>
    </div>
  );
}

const jobs = [
  { key: "maçon", label: "maçon" },
  { key: "peintre", label: "peintre" },
  { key: "éléctricien", label: "éléctricien" },
  { key: "plombier", label: "plombier" },
  { key: "menuisier", label: "menuisier" },
];
