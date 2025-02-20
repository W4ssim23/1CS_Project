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
import { useTranslations } from "next-intl";

export default function AddTache({ id, setColumns }) {
  const t = useTranslations("/admin.KanbanBoard");
  const type =
    id === "backlog" ? "a_faire" : id === "inProgress" ? "en_cours" : "fait";

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = async () => {
    if (!taskData.title || !taskData.description) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://onecs-back.onrender.com/app/admin/taches/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: taskData.title,
            description: taskData.description,
            state: type,
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
                title: taskData.title,
                description: taskData.description,
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
              <ModalBody>
                <Input
                  label={t("addTaskModal.taskTitle")}
                  name="title"
                  placeholder={t("addTaskModal.taskTitlePlaceholder")}
                  onChange={handleChange}
                  value={taskData.title}
                  fullWidth
                />
                <Textarea
                  label={t("addTaskModal.description")}
                  name="description"
                  placeholder={t("addTaskModal.descriptionPlaceholder")}
                  onChange={handleChange}
                  value={taskData.description}
                  fullWidth
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose} disabled={loading}>
                  {t("addTaskModal.cancel")}
                </Button>
                <Button
                  color="primary"
                  onPress={handleAddTask}
                  isLoading={loading}
                >
                  {t("addTaskModal.addTask")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
