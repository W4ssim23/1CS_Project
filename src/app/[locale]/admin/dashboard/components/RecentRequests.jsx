import { Link } from "@/i18n/routing";
import Image from "next/image";
import { miner } from "@/assets/svgs";

export default function RecentRequests() {
  const requests = [
    { id: 1, description: "Lorem ipsum lorem ipsum ..." },
    { id: 2, description: "Lorem ipsum lorem ipsum ..." },
    { id: 3, description: "Lorem ipsum lorem ipsum ..." },
    { id: 4, description: "Lorem ipsum lorem ipsum ..." },
    { id: 5, description: "Lorem ipsum lorem ipsum ..." },
    { id: 6, description: "Lorem ipsum lorem ipsum ..." },
  ];

  return (
    <div className="p-6 pl-0 rounded-lg  w-full  mx-auto ml-0 ">
      <h2 className="text-xl font-bold text-[#1F4690] mb-6">
        Des demandes Récentes
      </h2>
      <ul className="space-y-4 max-h-[200px] overflow-y-auto pr-4  ">
        {requests.map((request) => (
          <li
            key={request.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              {/* Placeholder for avatar , will be wrapped by a div in gray and rounded */}
              <Image src={miner} alt="Avatar" width={40} height={40} />
              <p className="text-gray-700 text-sm">{request.description}</p>
            </div>
            <Link
              href="#"
              className="text-[#1F4690] text-sm font-medium hover:underline"
            >
              Voir Plus
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
