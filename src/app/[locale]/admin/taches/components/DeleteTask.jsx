"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { redx10333 } from "@/assets/svgs";
import { useTranslations } from "next-intl";

export default function DeleteTask({ taskId, setDeleted }) {
  const t = useTranslations("/admin.KanbanBoard");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const handleDeleteTask = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://onecs-back.onrender.com/app/admin/taches/delete/${taskId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: taskId }),
        }
      );

      if (response.ok) {
        setDeleted(true);
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task", error);
    } finally {
      setLoading(false);
      onOpenChange(false);
    }
  };

  return (
    <>
      <Button
        isIconOnly
        className="bg-transparent"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      >
        <Image src={redx10333} alt="options" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("deleteTaskModal.title")}</ModalHeader>{" "}
              <ModalBody>
                <p>{t("deleteTaskModal.message")}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" onPress={onClose} disabled={loading}>
                  {t("deleteTaskModal.cancel")}
                </Button>
                <Button
                  color="danger"
                  onPress={handleDeleteTask}
                  isLoading={loading}
                >
                  {t("deleteTaskModal.delete")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
