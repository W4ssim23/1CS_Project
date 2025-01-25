"use client";

import { useRef } from "react"; // Import useRef from React
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

export default function TheList({ artisans }) {
  return (
    <div className="flex flex-col w-full">
      <HeadList />
      {artisans.map((artisan, index) => (
        <ElementList
          key={index}
          artisan={artisan}
          bg={index % 2 === 0 ? "#EFF7FE" : "#FFFFFF"}
        />
      ))}
    </div>
  );
}

function HeadList() {
  const columns = [
    { value: "Nom", hidden: false },
    { value: "Artisan Id", hidden: true, whenHide: "lg" },
    { value: "Email", hidden: true, whenHide: "sm" },
    { value: "Telephone", hidden: true, whenHide: "sm" },
    { value: "Status", hidden: true, whenHide: "sm" },
    { value: "Action", hidden: false },
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

function ElementList({ artisan, bg }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      className={`w-full p-2 py-4 flex items-center justify-evenly text-start sm:text-center`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex gap-1 w-full items-center min-w-[16.6%]">
        <Avatar
          src={artisan.avatar}
          size="small"
          alt="avatar"
          className="min-w-[40px] mr-1"
          fallback
        />
        <div className="w-full">
          {artisan.firstName + " " + artisan.lastName}
        </div>
      </div>
      <div className="w-full lg:block hidden min-w-[16.6%]">{artisan.id}</div>
      <div className="w-full sm:block hidden min-w-[16.6%] overflow-hidden">
        {artisan.email}
      </div>
      <div className="w-full sm:block hidden min-w-[16.6%]">
        {artisan.phoneNumber ? artisan.phoneNumber : "N/A"}
      </div>
      <div className="w-full sm:block hidden min-w-[16.6%]">
        {artisan.status}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button className="bg-[#B9D7F1] text-white" onClick={onOpen}>
          Suprimer
        </Button>
        <>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            className="m-1 sm:m-0"
          >
            <SuprimerModule id={artisan.id} />
          </Modal>
        </>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { ArtisanContext } from "../artisanContext";

function SuprimerModule({ id }) {
  const onCloseRef = useRef(null);
  const { setData } = useContext(ArtisanContext);

  const [loading, setLoading] = useState(false);

  const deleteArtisan = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}admin/artisans/delete/`,
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
        setData((clients) => clients.filter((client) => client.id !== id));
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
              Delete Artisan
            </ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <p>You Sure ?</p>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button color="primary" variant="flat" onPress={onClose}>
                Annuler
              </Button>
              <Button
                color="danger"
                onClick={deleteArtisan}
                isLoading={loading}
              >
                Confirmer
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}
