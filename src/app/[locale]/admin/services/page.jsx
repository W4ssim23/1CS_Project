import ServicesPageClient from "./components/ServicesPageClient";

export default async function ServicesPage({ searchParams }) {
  const page = searchParams.page || 1;

  let usersData = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/travaux/?page=${page}`,
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
      usersData = data;
    }
  } catch (e) {
    console.log(e);
  }

  return <ServicesPageClient usersData={usersData} />;
}
