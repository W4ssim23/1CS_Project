"use client";

import { Link } from "@/i18n/routing";
import { useState, useContext } from "react";
import { useRouter } from "@/i18n/routing";
import { Input, Button } from "@nextui-org/react";
import { GlobalContext } from "../../context";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations("/login.LoginForm");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const { setUserData } = useContext(GlobalContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) {
      setErrorName(t("usernameError"));
      return;
    }
    if (!password) {
      setErrorEmail(t("passwordError"));
      return;
    }
    setErrorName("");
    setErrorEmail("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://dzartisan-app.onrender.com/app/user-login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_or_username: userName, password }),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data.error) {
        setError(data.message);
        setLoading(false);
        return;
      } else {
        setLoading(false);
        document.cookie = `userData=${JSON.stringify(data.data)}; path=/;`;
        console.log(data, data.data.role);
        setUserData(data.data);
        router.push(`/${data.data.role}`);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div
      data-testid="login-form"
      className="h-full text-center flex flex-col items-center justify-center py-10 md:p-10 lg:pr-36 gap-16 min-w-[47%] md:min-w-[40%]"
    >
      <h1 className="text-4xl font-semibold text-nowrap">{t("signInTitle")}</h1>

      <Input
        className=" max-w-[360px]  md:max-w-[500px]  md:min-w-[310px]"
        key="username"
        size="lg"
        variant="bordered"
        label={t("usernameLabel")}
        placeholder={t("usernamePlaceholder")}
        labelPlacement="outside"
        onChange={(e) => setUserName(e.target.value)}
      ></Input>

      <Input
        className="   max-w-[360px]  md:max-w-[500px] md:min-w-[310px]"
        key="password"
        size="lg"
        type="password"
        variant="bordered"
        label={t("passwordLabel")}
        placeholder={t("passwordPlaceholder")}
        labelPlacement="outside"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>

      <Button
        className=" bg-[#1F4690] text-white   max-w-[360px]  md:max-w-[500px]   md:min-w-[310px]"
        size="lg"
        onClick={handleSubmit}
        isLoading={loading}
      >
        {t("signInButton")}
      </Button>

      <p className="sm:text-nowrap">
        {t("noAccountText")}{" "}
        <Link href="/register" className="text-blue-500">
          {t("signUpLink")}
        </Link>
      </p>
    </div>
  );
}
