import { Button, Spinner } from "@nextui-org/react";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function Created({ data }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  const handleRegister = async () => {
    if (hasRegistered) return;
    setHasRegistered(true);
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/app/artisan-signup/",
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
          we <span className=" text-red-600">couldn't</span> create your account
          !!
        </h1>
        <Link href="/register">
          <Button
            className=" bg-[#1F4690] text-white max-w-[360px] min-w-[222px]"
            size="lg"
            radius="sm"
          >
            try again ?
          </Button>
        </Link>
      </div>
    );

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-semibold text-lg max-w-[400px]">
        votre <span className="text-[#FFA500]">demande</span> de création de
        compte a été envoyer, vous allez recevoir un{" "}
        <span className="text-[#FFA500]">email</span> quand ce dernier sera
        <span className="text-[#FFA500]"> crée</span>.
      </h1>
      <Link href="/">
        <Button
          className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[222px]"
          size="lg"
          radius="sm"
          // onClick={handleRegister}
        >
          OK
        </Button>
      </Link>
    </div>
  );
}
