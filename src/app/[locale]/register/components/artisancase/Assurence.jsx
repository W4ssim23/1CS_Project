import { Button } from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

export default function Assurence({ setStep, setData }) {
  const [file, setFile] = useState(null);
  const handleNext = () => {
    if (!file) return;
    setData((prev) => ({
      ...prev,
      assurence: file,
    }));
    setStep(7);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">
        Veuillez entrez votre justificatif d’assurance
      </h1>
      <FileUploader
        className="bg-white rounded-xl"
        handleChange={(file) => setFile(file)}
        children={
          <div className="w-full h-full flex items-center justify-evenly min-w-[222px] rounded-md shadow-md bg-white p-2">
            <h1 className="text-center font-medium">
              ajouté une certification
            </h1>
          </div>
        }
      />
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
