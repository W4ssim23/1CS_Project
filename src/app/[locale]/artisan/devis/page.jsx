import DemandesList from "./components/DemandesList";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function DemandesPage({ searchParams }) {
  const t = await getTranslations("/artisan.DemandesPage");
  const job = searchParams?.job;
  if (!job) {
    redirect("/");
  }

  let userData = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/artisan/devis/${job}/`,
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
      userData = data.devis;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center py-5">
      <DemandesList demandes={userData} searchParams={searchParams} t={t} />{" "}
    </div>
  );
}
