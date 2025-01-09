import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Name({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const handleNext = () => {
    if (!name || !prenom) return;
    setData((prev) => ({ ...prev, first_name: name, last_name: prenom }));
    setStep(2);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("nameTitle")}</h1>
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="nom"
        size="lg"
        radius="sm"
        variant="bordered"
        label={t("nameLabel")}
        labelPlacement="outside"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="prénom"
        size="lg"
        radius="sm"
        variant="bordered"
        label={t("prenomLabel")}
        labelPlacement="outside"
        onChange={(e) => setPrenom(e.target.value)}
      />
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
