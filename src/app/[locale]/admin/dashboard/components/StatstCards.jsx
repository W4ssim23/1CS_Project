import Image from "next/image";
import { clientb, menb, handshake } from "@/assets/svgs";

export default function StatstCards({ data }) {
  // values would be fetched from the server
  const stats = [
    {
      text: "Le total des Artisans",
      value: data.totalArtisans,
      icon: menb,
      bg: "#FFF7C294",
    },
    {
      text: "Le total des Clients",
      value: data.totalClients,
      icon: clientb,
      bg: "#8FB6FF73",
    },
    {
      text: "Le total des services",
      value: data.totalDeals,
      icon: handshake,
      bg: "#33F6562B",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col sm:gap-14 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatCard({ text, value, icon, bg }) {
  return (
    <div
      className={` w-64 h-32 rounded-lg shadow-md flex flex-col items-start justify-center p-4 hover:shadow-2xl transition-all hover:-translate-y-1 ease-in-out duration-700`}
      style={{ backgroundColor: bg }}
    >
      <Image src={icon} alt="icon" width={30} height={30} />
      <p className="text-black text-[16px] font-bold">{value}</p>
      <p className="text-[#787878] text-[15px] font-semibold">{text}</p>
    </div>
  );
}
