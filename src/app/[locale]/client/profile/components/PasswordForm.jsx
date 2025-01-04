import { Input, Button } from "@nextui-org/react";

export default function PasswordForm() {
  return (
    <div className="flex flex-col gap-12 bg-[#E9E9E9] sm:px-16 py-8 items-start justify-center rounded-2xl">
      <h2 className="text-xl font-bold w-full text-center">
        Modification du mot de passe
      </h2>
      <form className="flex flex-col w-full sm:w-1/2 gap-4 p-2 items-center">
        <Input label="mot de passe actuel" type="password" />
        <Input label="nouveau mot de passe" type="password" />
        <Input label="confirmation du nouveau mot de passe" type="password" />
      </form>
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
