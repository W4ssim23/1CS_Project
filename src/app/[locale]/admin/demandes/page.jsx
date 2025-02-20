import DemandesList from "./components/DemandesList";

export default async function DemandesPage({ searchParams }) {
  const page = searchParams.page || 1;

  let usersData = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/admin/demandes/?page=${page}`,
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
      console.log(data);
      usersData = data;
    }
  } catch (e) {
    console.log(e);
  }

  if (!usersData) {
    return (
      <div className="w-full min-h-[90vh] flex items-center justify-center">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center py-5">
      <DemandesList
        demandes={usersData.demandes}
        pagination={usersData.pagination}
      />
    </div>
  );
}
