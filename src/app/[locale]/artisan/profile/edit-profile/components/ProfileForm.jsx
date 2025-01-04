import { Input, Button } from "@nextui-org/react";
import Pfp from "./Pfp";

export default function ProfileForm() {
  return (
    <div className="flex flex-col gap-8 bg-[#E9E9E9] sm:px-16 py-8 items-center justify-center rounded-2xl">
      <h2 className="text-xl font-bold text-center">
        Modification des information de profil
      </h2>
      <div className="flex sm:flex-row flex-col-reverse w-full items-center">
        <Infos />
        <Pfp />
      </div>
      <div className="flex sm:flex-row flex-col-reverse gap-4 w-full items-center justify-evenly">
        <Button
          className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px]  min-w-[200px]"
          size="lg"
          radius="lg"
        >
          Annuler
        </Button>

        <Button
          className=" bg-[#1F4690] text-white   max-w-[360px]  min-w-[200px]"
          size="lg"
          radius="lg"
        >
          enregistrer
        </Button>
      </div>
    </div>
  );
}

function Infos() {
  return (
    <form className="flex flex-col w-full sm:w-1/2 gap-4 p-2 items-center">
      <Input label="nom" />
      <Input label="prénom" />
      <Input label="numero de telephone" />
      <Input label="email" />
    </form>
  );
}
