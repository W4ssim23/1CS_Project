"use client";

import { useState } from "react";
import ClientDialogue from "./clientcase/ClientDialogue";
import ArtisanDialogue from "./artisancase/ArtizanDialogue";
import { Button } from "@nextui-org/react";

export default function DialogueBox() {
  const [dialogue, setDialogue] = useState("");
  return (
    <div className="sm:min-w-[720px] mx-6 sm:mx-0 h-96 bg-[#E9E9E9] rounded-lg flex flex-col justify-center items-center">
      {!dialogue && <ChooseDialogue setDialogue={setDialogue} />}
      {dialogue === "client" && <ClientDialogue />}
      {dialogue === "artisan" && <ArtisanDialogue />}
    </div>
  );
}

const ChooseDialogue = ({ setDialogue }) => {
  const [selectedDialogue, setSelectedDialogue] = useState("");
  const handleset = () => {
    setDialogue(selectedDialogue);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="text-center font-semibold text-lg">
        choisissez le type de compte que vous vouliez crée
      </h1>
      <div className="flex flex-col gap-1">
        <label>
          <input
            className="mr-2"
            type="radio"
            name="dialogue"
            value="artisan"
            onChange={(e) => setSelectedDialogue(e.target.value)}
          />
          Artisan
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            name="dialogue"
            value="client"
            onChange={(e) => setSelectedDialogue(e.target.value)}
          />
          Client
        </label>
      </div>
      <Button
        className=" text-white text-center font-medium  bg-[#1F4690] rounded-md py-3 px-4 min-w-[222px]"
        onClick={() => setDialogue(handleset)}
      >
        Submit
      </Button>
    </div>
  );
};
