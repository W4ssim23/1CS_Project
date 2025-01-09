import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Number({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [phone, setPhone] = useState("");
  const handleNext = () => {
    if (!phone) return;
    setData((prev) => ({ ...prev, phone_number: phone }));
    setStep(3);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("phoneTitle")}</h1>
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="phone"
        size="lg"
        radius="sm"
        variant="bordered"
        label={t("phoneLabel")}
        labelPlacement="outside"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className="flex gap-8">
        <Button
          className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[222px]"
          size="lg"
          radius="sm"
          onClick={handleNext}
        >
          {t("nextButton")}
        </Button>
        <Button
          className="max-w-[360px]  min-w-[222px]"
          size="lg"
          radius="sm"
          onClick={() => setStep(3)}
        >
          {t("laterButton")}
        </Button>
      </div>
    </div>
  );
}
