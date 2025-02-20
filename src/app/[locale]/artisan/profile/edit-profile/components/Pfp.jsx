"use client";

import { Avatar, Button, Modal, useDisclosure } from "@nextui-org/react";
import UploadPfP from "./UploadPfp";
import { useTranslations } from "next-intl";

export default function Pfp({ pfp, id, setPfp, t }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex flex-col w-1/2 gap-4 p-2 items-center">
      <Avatar className="w-36 h-36" src={pfp} fallback />
      <Button
        className="bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[250px] min-w-[150px]"
        size="lg"
        radius="lg"
        onClick={onOpen}
      >
        {t("pfpButton")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="m-1 sm:m-0"
      >
        <UploadPfP pfp={pfp} setPfp={setPfp} id={id} t={t} />{" "}
      </Modal>
    </div>
  );
}
