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
import { useTranslations } from "next-intl"; // Import useTranslations

export default function DeleteTask({ taskId, setDeleted }) {
  const t = useTranslations("/artisan.KanbanBoard"); // Use translations for the KanbanBoard section
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const handleDeleteTask = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://onecs-back.onrender.com/app/artisan/deals/tasks/${taskId}/delete/`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
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
              {/* Localized title */}
              <ModalBody>
                <p>{t("deleteTaskModal.message")}</p> {/* Localized message */}
              </ModalBody>
              <ModalFooter>
                <Button color="default" onPress={onClose} disabled={loading}>
                  {t("deleteTaskModal.cancel")} {/* Localized button text */}
                </Button>
                <Button
                  color="danger"
                  onPress={handleDeleteTask}
                  isLoading={loading}
                >
                  {t("deleteTaskModal.delete")} {/* Localized button text */}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
