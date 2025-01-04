import { Button } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

export default function AddDevis() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between p-3 px-5 text-center gap-4 sm:gap-0 ">
      <p className=" text-[24px] font-semibold">
        Resultat de mes{" "}
        <span className=" text-[#FFA500]">demande de devis</span>
      </p>
      <Link href="/client/devis/new">
        <Button
          className=" bg-transparent  text-[#1F4690] border-1 border-[#1F4690]   max-w-[360px]  min-w-[200px]"
          size="lg"
          radius="lg"
        >
          Nouveau Devis
        </Button>
      </Link>
    </div>
  );
}
