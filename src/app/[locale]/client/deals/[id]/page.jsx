import { Progress } from "@nextui-org/progress";
import Tasks from "./components/Tasks";
import { redirect } from "next/navigation";

const colors = ["#FFA500", "#1F4690", "#3BBF5E"];

export default async function DealProcess({ params, searchParams }) {
  const idClient = searchParams?.id;
  const idDeal = params?.id;
  const title = searchParams?.tit;
  if (!idClient || !idDeal || !title) {
    redirect("/");
  }

  let dataa = null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}client/deals/${idClient}/${idDeal}`,
      {
        cache: "no-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      dataa = await response.json();
    }
  } catch (e) {
    console.log(e);
  }

  if (!dataa) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  const totalTasks =
    dataa.restantes.length + dataa.encour.length + dataa.terminer.length;

  const finishedTasks = dataa.terminer.length;

  const progress =
    totalTasks > 0 ? Math.round((finishedTasks / totalTasks) * 100) : 0;

  const transformedData = {
    title: title,
    progress: progress,
    tasks: {
      "tranches restantes": dataa.restantes.map((task) => ({
        description: task.description,
        startDate: task.dateDebut,
        endDate: task.dateFin,
      })),
      "tranches en cours": dataa.encour.map((task) => ({
        description: task.description,
        startDate: task.dateDebut,
        endDate: task.dateFin,
      })),
      "tranches terminées": dataa.terminer.map((task) => ({
        description: task.description,
        startDate: task.dateDebut,
        endDate: task.dateFin,
      })),
    },
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col p-10 gap-8 text-2xl font-semibold">
      <h3>
        Detail du suivi de{" "}
        <span className="text-[#FFA500]">"{transformedData.title}"</span>
      </h3>
      <Progress
        aria-label="Loading..."
        color="warning"
        value={transformedData.progress}
      />
      <div className="flex flex-col gap-10">
        {Object.keys(transformedData.tasks).map((key, index) => (
          <Tasks
            key={index}
            title={key}
            color={colors[index]}
            tasks={transformedData.tasks[key]}
          />
        ))}
      </div>
    </div>
  );
}
