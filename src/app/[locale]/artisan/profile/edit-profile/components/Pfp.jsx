"use client";

import { Avatar, Button, Modal, useDisclosure } from "@nextui-org/react";
import UploadPfP from "./UploadPfp";

export default function Pfp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pfp =
    "https://i.pinimg.com/736x/27/f2/e8/27f2e89e10e7a0511f7bfb4fe51227c8.jpg";
  return (
    <div className="flex flex-col w-1/2 gap-4 p-2 items-center">
      <Avatar className="w-36 h-36" src={pfp} fallback />
      <Button
        className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[250px]  min-w-[150px]"
        size="lg"
        radius="lg"
        onClick={onOpen}
      >
        modifier ma photo de profile
      </Button>
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          className="m-1 sm:m-0"
        >
          <UploadPfP pfp={pfp} />
        </Modal>
      </>
    </div>
  );
}
