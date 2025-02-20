"use client";

import React, { useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Column from "./Column";
import Task from "./Task";
import { LoadingSpinner } from "@/components/ui";
import { useTranslations } from "next-intl"; // Import useTranslations

const KanbanBoard = ({ idArtisan, idDeal }) => {
  const t = useTranslations("/artisan.KanbanBoard"); // Use translations for the KanbanBoard section
  const [columns, setColumns] = useState({
    backlog: [],
    inProgress: [],
    done: [],
  });

  const [activeTask, setActiveTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://onecs-back.onrender.com/app/artisan/deals/${idArtisan}/${idDeal}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setColumns({
          backlog: data.restantes,
          inProgress: data.encour,
          done: data.terminer,
        });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findContainer = (id) => {
    if (columns.backlog.find((task) => task.id === id)) return "backlog";
    if (columns.inProgress.find((task) => task.id === id)) return "inProgress";
    if (columns.done.find((task) => task.id === id)) return "done";
    return null;
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const activeContainer = findContainer(active.id);
    if (!activeContainer) return;

    const task = columns[activeContainer].find((task) => task.id === active.id);
    setActiveTask(task);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer) return;

    if (activeContainer === overContainer) {
      const items = [...columns[activeContainer]];
      const oldIndex = items.findIndex((item) => item.id === activeId);
      const newIndex = items.findIndex((item) => item.id === overId);

      setColumns({
        ...columns,
        [activeContainer]: arrayMove(items, oldIndex, newIndex),
      });
    } else {
      const sourceItems = [...columns[activeContainer]];
      const destinationItems = [...columns[overContainer]];

      const [movedItem] = sourceItems.splice(
        sourceItems.findIndex((item) => item.id === activeId),
        1
      );

      destinationItems.splice(
        destinationItems.findIndex((item) => item.id === overId),
        0,
        movedItem
      );

      setColumns({
        ...columns,
        [activeContainer]: sourceItems,
        [overContainer]: destinationItems,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">{t("title")}</h1>{" "}
      {/* Localized title */}
      <div className="text-sm text-gray-500 mb-8 pb-8 border-b-1 border-[#1F4690]">
        {t("description")} {/* Localized description */}
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-8 flex-wrap justify-center">
          <Column
            id="backlog"
            title={t("columns.backlog")} // Localized column title
            tasks={columns.backlog}
            activeTaskId={activeTask?.id}
            setColumns={setColumns}
            idArtisan={idArtisan}
            idDeal={idDeal}
          />
          <Column
            id="inProgress"
            title={t("columns.inProgress")} // Localized column title
            tasks={columns.inProgress}
            activeTaskId={activeTask?.id}
            setColumns={setColumns}
            idArtisan={idArtisan}
            idDeal={idDeal}
          />
          <Column
            id="done"
            title={t("columns.done")} // Localized column title
            tasks={columns.done}
            activeTaskId={activeTask?.id}
            setColumns={setColumns}
            idArtisan={idArtisan}
            idDeal={idDeal}
          />
        </div>

        <DragOverlay>
          {activeTask ? (
            <Task
              id={activeTask.id}
              description={activeTask.description}
              dateDebut={activeTask.dateDebut}
              dateFin={activeTask.dateFin}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
