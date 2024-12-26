import Task from "./Task";

import { Plus } from "@/assets/svgs";
import Image from "next/image";

import React, { useState } from "react";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function Column({ id, title, tasks }) {
  return (
    <div className="bg-white  rounded-lg w-72  shadow flex flex-col items-center">
      <h2 className=" text-base rounded-t-lg text-[#223759] bg-[#F0F6FF] w-full h-14 mb-2 p-4 font-semibold">
        {title}
      </h2>
      <button className="text-white w-[90%] h-10 flex items-center justify-center rounded-xl border-2 border-dashed border-[#1F4690]">
        <Image src={Plus} alt="plus" />
      </button>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <div className="space-y-3 flex flex-col items-center py-4 w-full">
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
