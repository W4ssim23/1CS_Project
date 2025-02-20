import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { Options, pdf } from "@/assets/svgs";
import { Link } from "@/i18n/routing";
import { redirect } from "next/navigation";
import MakeOffer from "./components/MakeOffer";
import { getTranslations } from "next-intl/server"; // Import getTranslations

export default async function DemandeDetailsPage({ params, searchParams }) {
  const t = await getTranslations("/artisan.DemandeDetailsPage"); // Fetch translations
  const id = params?.id;
  const pfp = searchParams?.pfp;
  const job = searchParams?.job;
  if (!id || !job) {
    redirect("/");
  }

  let data = null;
  try {
    const response = await fetch(
      `https://onecs-back.onrender.com/app/artisan/one-devis/${id}/`,
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
      const dataa = await response.json();
      console.log(dataa.message);
    }
    const dataa = await response.json();
    if (dataa.error) {
      console.log(dataa.message);
    } else {
      data = dataa.devis;
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="w-[90%] flex flex-col items-center bg-white border rounded-lg shadow-md p-6 px-9 mx-4 mt-4">
      <Link
        className="w-full flex items-center mb-3"
        href={`/artisan/devis?job=${job}`}
      >
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
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold text-lg">
          <Avatar src={pfp} alt="user" size="md" />
          <p>{data?.clientFirstName + " " + data?.clientLastName}</p>
        </div>
        <Image src={Options} alt="Options" className="cursor-pointer" />
      </div>
      {/* the infos... */}
      <div className="w-full mt-4 bg-[#F8F8F8] rounded-2xl p-4">
        <div className="flex md:flex-row flex-col gap-3 py-2">
          <span className="text-nowrap font-semibold">{t("title")}:</span>
          <span className="text-[#787878]">{data?.title}</span>
        </div>
        <div className="flex md:flex-row flex-col gap-3 py-2">
          <span className="text-nowrap font-semibold">{t("description")}:</span>
          <span className="text-[#787878]">{data?.description}</span>
        </div>
        <div className="flex md:flex-row flex-col gap-3 py-2">
          <span className="text-nowrap font-semibold">
            {t("estimatedPrice")}:
          </span>
          <span className="text-[#787878]">{data?.estimatedPrice}</span>
        </div>
        <div className="flex flex-wrap flex-shrink-0 gap-2 rounded-full whitespace-nowrap w-full py-2 items-center mt-2">
          {data?.imgLinks?.map((file, idx) => (
            <Link href={file} key={idx}>
              <div className="text-[#606060] text-sm p-1 px-2 border border-[#606060] rounded-full flex items-center gap-1 cursor-pointer w-fit max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                <Image src={pdf} alt="file" width={18} height={18} />
                {t("example")} {/* Localized "example" text */}
              </div>
            </Link>
          ))}
        </div>
        <MakeOffer offerId={data?.id} /> {/* Pass translations as props */}
      </div>
    </div>
  );
}
