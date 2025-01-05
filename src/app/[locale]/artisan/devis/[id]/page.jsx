import { Avatar, Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { Options, pdf } from "@/assets/svgs";
import { Link } from "@/i18n/routing";

// fetch data from the server
const data = {
  avatar:
    "https://lastfm.freetls.fastly.net/i/u/ar0/c727ac2a12a296b7f62549def8d6b537.jpg",
  userName: "Zouitene Ouassim",
  title:
    "Water leak in the kitchen, I need a plumber to fix it as soon as possible",
  infos: {
    "Artisan responsable": "Plumber",
    Description:
      "Service de réparation et de restauration de meubles anciens avec des techniques artisanales.",
    "Prix estimé": "À partir de 15 000 DA",
  },
  files: [
    {
      name: "details_du_service.pdf",
      link: "https://www.youtube.com/watch?v=qAsHVwl-MU4",
    },
  ],
};

export default function DemandeDetailsPage() {
  return (
    <div className="w-[90%] flex flex-col items-center bg-white border rounded-lg shadow-md p-6 px-9 mx-4 mt-4">
      <Link className="w-full flex items-center mb-3" href="/artisan/devis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      <div className=" w-full flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-lg">
          <Avatar src={data?.avatar} alt="user" size="md" />
          <p>{data?.userName}</p>
        </div>
        <Image src={Options} alt="Options" className=" cursor-pointer" />
      </div>
      {/* the infos... */}
      <div className="w-full mt-4 bg-[#F8F8F8] rounded-2xl p-4">
        {Object.entries(data?.infos || {}).map(([key, value], idx) => (
          <div key={idx} className="flex md:flex-row flex-col gap-3 py-2">
            <span className="text-nowrap font-semibold">{key}:</span>
            <span className="text-[#787878]">{value}</span>
          </div>
        ))}
        <div className="flex flex-wrap flex-shrink-0 gap-2 rounded-full whitespace-nowrap w-full py-2 items-center mt-2">
          {data?.files?.map((file, idx) => (
            <Link href={file.link} key={idx}>
              <div className="text-[#606060] text-sm p-1 px-2 border border-[#606060] rounded-full flex items-center gap-1 cursor-pointerw-fit max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                <Image src={pdf} alt="file" width={18} height={18} />
                {file?.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex w-full items-center justify-end gap-5">
          <div className=" max-w-[200px] rounded-xl border-1  ">
            <Input
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    Currency
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>DA</option>
                  </select>
                </div>
              }
              label="Price"
              placeholder="0.00"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
              type="number"
            />
          </div>
          <Button
            className=" bg-transparent text-[#1F4690] border-1 border-[#1F4690] "
            size="lg"
            radius="lg"
          >
            make an offer
          </Button>
        </div>
      </div>
    </div>
  );
}
