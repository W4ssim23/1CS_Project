import Visitors from "./components/Visitors";
import Pourcentage from "./components/Pourcentage";
import TachesList from "./components/TachesList";
import RecentRequests from "./components/RecentRequests";
import StatstCards from "./components/StatstCards";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center py-2 gap-6">
      <StatstCards />
      <div className="flex gap-14">
        <div className="flex flex-col items-start justify-start gap-4">
          <Visitors />
          <RecentRequests />
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <Pourcentage />
          <TachesList />
        </div>
      </div>
    </div>
  );
}
