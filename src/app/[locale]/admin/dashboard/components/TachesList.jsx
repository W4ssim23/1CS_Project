import { Vector, Vector2 } from "@/assets/svgs";
import Image from "next/image";

export default function TachesList({ data }) {
  const tasks = data;

  return (
    <div className="w-80 bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 ease-in-out duration-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#2B3674]">Mes Taches</h2>
        <button className="text-gray-500 hover:bg-gray-200 p-2 py-3 rounded-full">
          <Image src={Vector} alt="Vector" />
        </button>
      </div>

      {!tasks.length && (
        <p className="text-gray-400 text-center my-10">Aucune tache</p>
      )}

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-3 last:mb-0"
          >
            <label className="flex items-center text-[#A3AED0] cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 text-blue-600 border-[#A3AED0] rounded focus:ring-blue-500"
              />
              <span className="ml-2">{task.title}</span>
            </label>
            <div className="text-gray-400 cursor-pointer">
              <Image src={Vector2} alt="Vector2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
