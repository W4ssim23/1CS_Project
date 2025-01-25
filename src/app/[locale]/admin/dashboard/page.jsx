import Visitors from "./components/Visitors";
import Pourcentage from "./components/Pourcentage";
import TachesList from "./components/TachesList";
import RecentRequests from "./components/RecentRequests";
import StatstCards from "./components/StatstCards";

export default async function DashboardPage() {
  let userData = null;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "admin/dashboard/",
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
    }
    const data = await response.json();
    if (data.error) {
      console.log(data.message);
    } else {
      userData = data;
    }
  } catch (e) {
    console.log(e);
  }

  if (!userData) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center py-2 gap-6">
      <StatstCards data={userData} />
      <div className="flex md:flex-row flex-col gap-8 sm:gap-14">
        <div className="flex flex-col items-start justify-center sm:justify-start gap-4">
          <Visitors dataa={userData} />
          <RecentRequests data={userData.recentDemandes} />
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-start gap-4">
          <Pourcentage dataa={userData} />
          <TachesList data={userData.recentTaches} />
        </div>
      </div>
    </div>
  );
}
