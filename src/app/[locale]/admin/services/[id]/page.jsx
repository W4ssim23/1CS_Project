import { Progress } from "@nextui-org/progress";
import Tasks from "./components/Tasks";

const data = {
  title: "reparation d’un velo",
  progress: 70,
  tasks: {
    "tranches restantes": [
      {
        description: "La description de la tâche qui reste à faire.",
        startDate: "12/12/2024",
        endDate: "12/12/2024",
      },
      {
        description: "Une autre tâche restante.",
        startDate: "12/12/2024",
        endDate: "12/12/2024",
      },
    ],
    "tranches en cours": [
      {
        description: "La description de la tâche en cours.",
        startDate: "12/12/2024",
        endDate: "12/12/2024",
      },
    ],
    "tranches terminées": [
      {
        description: "La description de la tâche terminée.",
        startDate: "12/12/2024",
        endDate: "12/12/2024",
      },
      {
        description: "Une autre tâche terminée.",
        startDate: "12/12/2024",
        endDate: "12/12/2024",
      },
    ],
  },
};

const colors = ["#FFA500", "#1F4690", "#3BBF5E"];

export default function DealProcess({ params }) {
  console.log(params.id);
  return (
    <div className="w-full min-h-[90vh] flex flex-col p-10 gap-8 text-2xl font-semibold">
      <h3>
        Detail du suivi de{" "}
        <span className="text-[#FFA500]">"{data?.title}"</span>
      </h3>
      <Progress aria-label="Loading..." color="warning" value={data.progress} />
      <div className="flex flex-col gap-10">
        {Object.keys(data.tasks).map((key, index) => (
          <Tasks
            key={index}
            title={key}
            color={colors[index]}
            tasks={data.tasks[key]}
          />
        ))}
      </div>
    </div>
  );
}
