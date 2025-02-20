"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { Plus } from "@/assets/svgs";
import { useTranslations } from "next-intl"; // Import useTranslations

export default function AddDealTask({ idArtisan, idDeal, setColumns, id }) {
  const t = useTranslations("/artisan.KanbanBoard"); // Use translations for the KanbanBoard section
  const type =
    id === "backlog" ? "a_faire" : id === "inProgress" ? "en_cours" : "fait";

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [taskData, setTaskData] = useState({
    description: "",
    dateDebut: "",
    dateFin: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = async () => {
    if (!taskData.description) return;
    setLoading(true);

    console.log("sending task data", {
      description: taskData.description,
      dateDebut: taskData.dateDebut || null,
      dateFin: taskData.dateFin || null,
      etat: type,
    });

    try {
      const response = await fetch(
        `https://onecs-back.onrender.com/app/artisan/deals/${idArtisan}/${idDeal}/add/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            description: taskData.description,
            dateDebut: taskData.dateDebut || null,
            dateFin: taskData.dateFin || null,
            etat: type,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Task added successfully", result);
        setColumns((prev) => {
          const newTaskPrev = {
            ...prev,
            [id]: [
              ...prev[id],
              {
                id: result.id,
                ...taskData,
              },
            ],
          };
          return newTaskPrev;
        });
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task", error);
    } finally {
      setLoading(false);
      onOpenChange(false);
    }
  };

  return (
    <>
      <button
        className="text-white w-[90%] h-10 flex items-center justify-center rounded-xl border-2 border-dashed border-[#1F4690]"
        onClick={onOpen}
      >
        <Image src={Plus} alt="plus" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("addTaskModal.title")}</ModalHeader>{" "}
              {/* Localized title */}
              <ModalBody>
                <Textarea
                  label={t("addTaskModal.description")} // Localized label
                  name="description"
                  placeholder={t("addTaskModal.descriptionPlaceholder")} // Localized placeholder
                  onChange={handleChange}
                  value={taskData.description}
                  fullWidth
                />
                <Input
                  label={t("addTaskModal.startDate")} // Localized label
                  name="dateDebut"
                  type="date"
                  onChange={handleChange}
                  value={taskData.dateDebut}
                  fullWidth
                />
                <Input
                  label={t("addTaskModal.endDate")} // Localized label
                  name="dateFin"
                  type="date"
                  onChange={handleChange}
                  value={taskData.dateFin}
                  fullWidth
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose} disabled={loading}>
                  {t("addTaskModal.cancel")} {/* Localized button text */}
                </Button>
                <Button
                  color="primary"
                  onPress={handleAddTask}
                  isLoading={loading}
                >
                  {t("addTaskModal.addTask")} {/* Localized button text */}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
