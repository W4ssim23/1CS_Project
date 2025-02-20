import Task from "./Task";
import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import AddDealTask from "./AddDealTask";
import { useTranslations } from "next-intl"; // Import useTranslations

export default function Column({
  id,
  title,
  tasks,
  activeTaskId,
  setColumns,
  idArtisan,
  idDeal,
}) {
  const t = useTranslations("/artisan.KanbanBoard"); // Use translations for the KanbanBoard section

  const localizedTitle = t(`columns.${id}`); // Fetch localized title based on column ID

  return (
    <div className="bg-white rounded-lg w-72 shadow flex flex-col items-center">
      <h2 className="text-base rounded-t-lg text-[#223759] bg-[#F0F6FF] w-full h-14 mb-2 p-4 font-semibold">
        {localizedTitle} {/* Use localized title */}
      </h2>
      <AddDealTask
        id={id}
        setColumns={setColumns}
        idDeal={idDeal}
        idArtisan={idArtisan}
      />
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <div className="space-y-3 flex flex-col items-center py-4 w-full">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              isDragging={task.id === activeTaskId}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
