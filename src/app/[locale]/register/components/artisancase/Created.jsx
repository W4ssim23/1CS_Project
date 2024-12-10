import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

export default function Created({ data }) {
  const handleNext = () => {};
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
          onClick={handleNext}
        >
          OK
        </Button>
      </Link>
    </div>
  );
}
