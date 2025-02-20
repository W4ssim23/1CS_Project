import KanbanBoard from "./components/KanbanBoard";
import { redirect } from "next/navigation";

export default async function ServicesPage({ searchParams, params }) {
  const idArtisan = searchParams.id;
  const idDeal = params.id;

  if (!idArtisan || !idDeal) {
    return redirect("/");
  }
  return <KanbanBoard idArtisan={idArtisan} idDeal={idDeal} />;
}
