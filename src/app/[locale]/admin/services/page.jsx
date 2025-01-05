import { Link } from "@/i18n/routing";
import GotNothing from "./components/GotNothing";

import { Button } from "@nextui-org/react";

const data = [
  {
    id: "1",
    clientName: "Zouitene Ouassim",
    artisanName: "Kanye West",
    serviceName: "reparation de table",
    price: "1000",
    pourcentage: "70",
    payed: false,
  },
  {
    id: "2",
    clientName: "Zouitene Ouassim",
    artisanName: "Frank Ocean",
    serviceName: "reparation de chaise",
    price: "500",
    pourcentage: "30",
    payed: true,
  },
  {
    id: "3",
    clientName: "Zouitene Ouassim",
    artisanName: "Joji",
    serviceName: "reparation de lit",
    price: "1500",
    pourcentage: "93",
    payed: true,
  },
  {
    id: "4",
    clientName: "Zouitene Ouassim",
    artisanName: "Lionel Messi",
    serviceName: "fixing the sink",
    price: "2000",
    pourcentage: "50",
    payed: false,
  },
  {
    id: "5",
    clientName: "Zouitene Ouassim",
    artisanName: "Travis Scott",
    serviceName: "painting the house",
    price: "3000",
    pourcentage: "70",
    payed: true,
  },
];

export default async function ServicesPage() {
  if (!data.length) {
    return (
      <div className="w-[90%]">
        <GotNothing />
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center p-2 gap-12">
      <h1 className="text-3xl font-bold w-[90%] pt-2">
        Mes <span className="text-[#FFA500]">Services</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex sm:w-[90%] justify-between p-4 items-center text-gray-500 font-semibold text-center">
          <p className=" w-full">artisan</p>
          <p className=" w-full">client</p>
          <p className=" w-full">service</p>
          <p className="hidden sm:block w-full">price</p>
          <p className="hidden sm:block w-full">pourcentage</p>
          <p className="hidden md:block w-full">payed</p>
          <div className=" w-[70px] sm:w-[500px]"></div>
        </div>
        <div className="w-full flex flex-col items-center gap-5 text-center max-h-[70vh] overflow-y-auto pb-1">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[90%] h-[70px] bg-blue-700 bg-opacity-10 shadow-md rounded-xl flex items-center justify-between p-1 sm:p-4 font-[550]"
            >
              <p className=" w-full">{item.artisanName}</p>
              <p className=" w-full">{item.clientName}</p>
              <p className=" w-full">{item.serviceName}</p>
              <p className="hidden sm:block text-green-600 w-full ">
                {item.price} DA
              </p>
              <p className="hidden sm:block text-orange-400 w-full ">
                {item.pourcentage} %
              </p>
              <p
                className={
                  item.payed
                    ? "text-green-600 hidden md:block w-full "
                    : "text-red-600 hidden md:block w-full "
                }
              >
                {item.payed ? "payed" : "not payed"}
              </p>
              <Link href={`services/${item.id}`}>
                <Button
                  className=" bg-transparent text-[#FFA500] border-1 border-[#FFA500]"
                  radius="lg"
                >
                  Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
