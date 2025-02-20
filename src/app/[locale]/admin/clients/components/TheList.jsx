"use client";

import { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function TheList({ clients }) {
  return (
    <div className="flex flex-col w-full">
      <HeadList />
      {clients.map((client, index) => (
        <ElementList
          key={index}
          client={client}
          bg={index % 2 === 0 ? "#EFF7FE" : "#FFFFFF"}
        />
      ))}
    </div>
  );
}

function HeadList() {
  const t = useTranslations("/admin.TheList");
  const columns = [
    { value: t("name"), hidden: false },
    { value: t("clientId"), hidden: true, whenHide: "lg" },
    { value: t("email"), hidden: true, whenHide: "sm" },
    { value: t("phone"), hidden: true, whenHide: "sm" },
    { value: t("genre"), hidden: true, whenHide: "lg" },
    { value: t("action"), hidden: false },
  ];

  return (
    <div className="bg-transparent text-[#424242] font-semibold w-full p-2 py-4 flex items-center text-start sm:text-center justify-evenly">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`w-full ${
            column.hidden ? `hidden ${column.whenHide}:block` : "block"
          }`}
        >
          {column.value}
        </div>
      ))}
    </div>
  );
}

function ElementList({ client, bg }) {
  const t = useTranslations("/admin.TheList");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      className="w-full p-2 py-4 flex items-center justify-evenly text-start sm:text-center"
      style={{ backgroundColor: bg }}
    >
      <div className="flex gap-1 w-full items-center">
        <Avatar
          src={client.pfp}
          size="small"
          alt="avatar"
          className="min-w-[40px] mr-1"
          fallback
        />
        <div className="w-full">{client.firstName + " " + client.lastName}</div>
      </div>
      <div className="w-full lg:block hidden items-center min-w-[16.6%]">
        {client.id}
      </div>
      <div className="w-full sm:block hidden items-center min-w-[16.6%] overflow-hidden">
        {client.email}
      </div>
      <div className="w-full sm:block hidden items-center min-w-[16.6%]">
        {!client.phoneNumber ? "N/A" : client.phoneNumber}
      </div>
      <div className="w-full lg:block hidden items-center min-w-[16.6%]">
        {client.gender === "Unknown" ? "N/A" : client.gender}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button className="bg-[#B9D7F1] text-white" onClick={onOpen}>
          {t("deleteButton")}
        </Button>
        <>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            className="m-1 sm:m-0"
          >
            <SuprimerModule id={client.id} />
          </Modal>
        </>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { ClientContext } from "../clientContext";

function SuprimerModule({ id }) {
  const onCloseRef = useRef(null);

  const { setClients } = useContext(ClientContext);

  const [loading, setLoading] = useState(false);

  const t = useTranslations("/admin.TheList");

  const deleteClient = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://onecs-back.onrender.com/app/admin/clients/delete/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
          credentials: "include",
        }
      );
      if (response.ok) {
        setClients((clients) => clients.filter((client) => client.id !== id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onCloseRef.current();
    }
  };

  return (
    <ModalContent>
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("deleteTitle")}
            </ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <p>{t("deleteText")}</p>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button color="primary" variant="flat" onPress={onClose}>
                {t("deleteCancel")}
              </Button>
              <Button color="danger" onClick={deleteClient} isLoading={loading}>
                {t("deleteConfirm")}
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}
