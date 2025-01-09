import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Email({ setStep, setData }) {
  const t = useTranslations("/register.RegisterForm");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = () => {
    if (!email || !password || !confirmPassword) {
      setError(t("allFieldsRequired"));
      return;
    }
    if (!validateEmail(email)) {
      setError(t("invalidEmail"));
      return;
    }
    if (password !== confirmPassword) {
      setError(t("passwordsDoNotMatch"));
      return;
    }
    if (password.length < 8) {
      setError(t("passwordLength"));
      return;
    }
    setData((prev) => ({
      ...prev,
      email,
      password1: password,
      password2: confirmPassword,
    }));
    setStep(4);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-medium text-lg">{t("emailTitle")}</h1>
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="email"
        size="lg"
        radius="sm"
        variant="bordered"
        label={t("emailLabel")}
        labelPlacement="outside"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="password"
        size="lg"
        radius="sm"
        type="password"
        variant="bordered"
        label={t("passwordLabel")}
        labelPlacement="outside"
        onChange={(e) => setpassword(e.target.value)}
      />
      <Input
        className=" max-w-[300px]  sm:max-w-[500px]  md:min-w-[310px] bg-white rounded-xl "
        key="confPassword"
        size="lg"
        radius="sm"
        type="password"
        variant="bordered"
        label={t("confirmPasswordLabel")}
        labelPlacement="outside"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <div className="text-red-500">{error}</div>}
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
