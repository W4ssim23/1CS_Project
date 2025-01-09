import { Button, Spinner } from "@nextui-org/react";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Created({ data }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  const t = useTranslations("/register.RegisterForm");

  const handleRegister = async () => {
    if (hasRegistered) return;
    setHasRegistered(true);
    setLoading(true);
    try {
      const response = await fetch(
        "https://dzartisan-app.onrender.com/app/client-signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("success");
      } else {
        console.error("error");
        console.error(await response.json());
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleRegister();
  }, []);

  if (loading)
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
        <Spinner color="#1F4690" />
      </div>
    );

  if (error)
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
        <h1 className="text-center font-semibold text-lg">
          {t("createdError")}{" "}
          <span className=" text-red-600">{t("createdError2")}</span>{" "}
          {t("createdError3")}
        </h1>
        <Link href="/register">
          <Button
            className=" bg-[#1F4690] text-white max-w-[360px] min-w-[222px]"
            size="lg"
            radius="sm"
          >
            {t("tryAgain")}
          </Button>
        </Link>
      </div>
    );

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-semibold text-lg">
        {t(createdSuccess)}{" "}
        <span className="text-[#FFA500]">{t(createdSuccess2)}</span>
        {t(createdSuccess3)}
      </h1>
      <Link href="/login">
        <Button
          className=" bg-[#1F4690] text-white max-w-[360px] min-w-[222px]"
          size="lg"
          radius="sm"
        >
          {t("connect")}
        </Button>
      </Link>
    </div>
  );
}
