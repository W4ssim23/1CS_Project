"use client";

import React, { useState } from "react";
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

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    backlog: [
      {
        id: 1,
        title: "Ajouter un artisan",
        discription: "Ajouter un nouveau profil artisan manuellement",
        nmbr: 3,
      },
      {
        id: 2,
        title: "Profile des artisans",
        discription: "Vérifier et approuver les profils des artisans",
        nmbr: 1,
      },
      {
        id: 3,
        title: "Services",
        discription: "Vérifier les services proposés par les artisans",
        nmbr: 4,
      },
    ],
    inProgress: [
      {
        id: 4,
        title: "services",
        discription: "Design new user interface design for food delivery app",
        nmbr: 7,
      },
      {
        id: 5,
        title: "Gestion des réclamations",
        discription: "lorem epseum lorem epseum",
        nmbr: 2,
      },
      {
        id: 6,
        title: "Artisans",
        discription: "supprimer des profils d’artisans non conformes",
        nmbr: 3,
      },
    ],
    done: [
      {
        id: 7,
        title: "Supprimer un utilisateur",
        discription: "lorem epseum lorem epseum",
        nmbr: 2,
      },
      {
        id: 8,
        title: "Service",
        discription: "lorem epseum lorem epseum",
        nmbr: 6,
      },
      {
        id: 9,
        title: "Ajouter un client",
        discription: "lorem epseum lorem epseum",
        nmbr: 5,
      },
    ],
  });

  const [activeTask, setActiveTask] = useState(null);

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
      // Same container sorting
      const items = [...columns[activeContainer]];
      const oldIndex = items.findIndex((item) => item.id === activeId);
      const newIndex = items.findIndex((item) => item.id === overId);

      setColumns({
        ...columns,
        [activeContainer]: arrayMove(items, oldIndex, newIndex),
      });
    } else {
      // Moving between containers
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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Tâches</h1>
      <div className="text-sm text-gray-500 mb-8 pb-8 border-b-1 border-[#1F4690]">
        Ajoutez, modifiez ou supprimez vos tâches
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-8">
          <Column id="backlog" title="Backlog" tasks={columns.backlog} />
          <Column id="inProgress" title="En cours" tasks={columns.inProgress} />
          <Column id="done" title="Terminée" tasks={columns.done} />
        </div>

        <DragOverlay>
          {activeTask ? (
            <Task
              id={activeTask.id}
              title={activeTask.title}
              discription={activeTask.discription}
              nmbr={activeTask.nmbr}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
