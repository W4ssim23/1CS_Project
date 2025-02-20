"use client";
import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import BuyComp from "./BuyComp";
import { useTranslations } from "next-intl";

export default function BuyModel({ travailId, clientId, amount, params }) {
  const t = useTranslations("/client.BuyModel");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-1/4 flex items-center justify-center">
      <Button
        className="bg-transparent border-1 border-[#FFA500] text-[#FFA500] min-w-[120px]"
        size="lg"
        radius="lg"
        onClick={onOpen}
      >
        {t("buyButton")}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("checkoutTitle")}
              </ModalHeader>
              <ModalBody>
                <BuyComp
                  clientId={clientId}
                  travailId={travailId}
                  amount={amount}
                  params={params}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("closeButton")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
