import AddClient from "./components/AddClient";
import Client from "./components/Client";

export default async function ClientPage() {
  return (
    <div className="w-full h-full min-h-[90vh] flex flex-col items-center p-6 gap-5">
      <AddClient />
      <Client />
    </div>
  );
}
