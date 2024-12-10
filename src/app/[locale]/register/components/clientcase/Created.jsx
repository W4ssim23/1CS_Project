import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

export default function Created({ data }) {
  //bah ma nnsach :
  //sends data to api at render
  //displays a loading while that
  //then displays a success message or an error message
  //drka ranni mdair rir success wa9t nlinki nkmlou
  const handleNext = () => {};
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly min-w-[342px]">
      <h1 className="text-center font-semibold text-lg">
        votre compte a été <span className="text-[#FFA500]">crée</span> avec
        succès.
      </h1>
      <Link href="/login">
        <Button
          className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[222px]"
          size="lg"
          radius="sm"
          onClick={handleNext}
        >
          se connecté
        </Button>
      </Link>
    </div>
  );
}
