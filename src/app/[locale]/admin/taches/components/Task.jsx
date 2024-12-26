import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Options, Note } from "@/assets/svgs";
import Image from "next/image";

export default function Task({ id, title, discription, nmbr, isDragging }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 w-[92%] rounded-lg shadow cursor-pointer border border-gray-200 hover:border-gray-300 flex flex-col gap-2"
    >
      <div className=" w-full flex items-center justify-between gap-1">
        <h1 className="text-[#223759]">{title}</h1>
        <Image src={Options} alt="options" />
      </div>
      <p className=" text-sm text-[#6F6F70] w-[80%] font-light">
        {discription}
      </p>
      <div className="flex gap-2">
        <Image src={Note} alt="note" />
        <p className=" text-[#6F6F70] font-extralight text-sm">{nmbr}</p>
      </div>
    </div>
  );
}
