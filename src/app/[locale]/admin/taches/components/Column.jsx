import Task from "./Task";
import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import AddTache from "./AddTache";
import { useTranslations } from "next-intl";

export default function Column({ id, title, tasks, activeTaskId, setColumns }) {
  const t = useTranslations("/admin.KanbanBoard");

  const localizedTitle = t(`columns.${id}`);

  return (
    <div className="bg-white rounded-lg w-72 shadow flex flex-col items-center">
      <h2 className="text-base rounded-t-lg text-[#223759] bg-[#F0F6FF] w-full h-14 mb-2 p-4 font-semibold">
        {localizedTitle}
      </h2>
      <AddTache id={id} setColumns={setColumns} />
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
