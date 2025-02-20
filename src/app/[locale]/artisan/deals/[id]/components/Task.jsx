import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Note } from "@/assets/svgs";
import Image from "next/image";
import DeleteTask from "./DeleteTask";
import { useState } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations

export default function Task({
  id,
  description,
  dateDebut,
  dateFin,
  isDragging,
}) {
  const t = useTranslations("/artisan.KanbanBoard"); // Use translations for the KanbanBoard section
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  const [deleted, setDeleted] = useState(false);

  if (deleted) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 w-[92%] rounded-lg shadow cursor-pointer border border-gray-200 hover:border-gray-300 flex flex-col gap-2"
    >
      <div className="w-full flex items-center justify-between gap-1">
        <h1 className="text-[#223759]">{description}</h1>
        <DeleteTask taskId={id} setDeleted={setDeleted} />
      </div>
      <p className="text-sm text-[#6F6F70] w-[80%] font-light">
        {t("task.from")}: {dateDebut} {/* Localized "From" label */}
      </p>
      <p className="text-sm text-[#6F6F70] w-[80%] font-light">
        {t("task.to")}: {dateFin} {/* Localized "To" label */}
      </p>
      <div className="flex gap-2">
        <Image src={Note} alt="note" />
        <p className="text-[#6F6F70] font-extralight text-sm">{id}</p>
      </div>
    </div>
  );
}
