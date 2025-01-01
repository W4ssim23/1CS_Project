import { Avatar, Input, Button } from "@nextui-org/react";
import React from "react";

export default function Profile() {
  return (
    <div className="h-full w-full flex flex-col p-8 gap-4">
      <h1 className="text-3xl font-bold">
        Modifier <span className=" text-[#FFA500]">mon profil</span>
      </h1>
      <ProfileForm />
      <PasswordForm />
    </div>
  );
}

function ProfileForm() {
  return (
    <div className="flex flex-col gap-8 bg-[#E9E9E9] px-16 py-8 items-center justify-center rounded-2xl">
      <h2 className="text-xl font-bold">
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

function Pfp() {
  return (
    <div className="flex flex-col w-1/2 gap-4 p-2 items-center">
      <Avatar
        className="w-36 h-36"
        src="https://i.pinimg.com/736x/27/f2/e8/27f2e89e10e7a0511f7bfb4fe51227c8.jpg"
      />
      <Button
        className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[250px]  min-w-[150px]"
        size="lg"
        radius="lg"
      >
        modifier ma photo de profile
      </Button>
    </div>
  );
}

function PasswordForm() {
  return (
    <div className="flex flex-col gap-12 bg-[#E9E9E9] px-16 py-8 items-start justify-center rounded-2xl">
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
