import { Avatar, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function ArtisanList({ artisans, setPortfolioId }) {
  return (
    <div className="flex flex-wrap gap-8 w-full items-center justify-start px-4">
      {artisans.map((artisan, index) => (
        <ArtisanCard
          key={index}
          data={artisan}
          setPortfolioId={setPortfolioId}
        />
      ))}
    </div>
  );
}

function ArtisanCard({ data, setPortfolioId }) {
  const t = useTranslations("/client.ArtisanList");
  return (
    <div className="flex flex-col items-center bg-slate-200 py-6 gap-3 min-w-[300px] rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-auto">
      <Avatar
        src={data.artisanPfpLink}
        fallback
        className="w-[75px] h-[75px]"
      />
      <p className="font-bold text-lg text-blue-900">{data.artisanName}</p>
      <p className="font-semibold text-gray-500">{data.artisanJob}</p>
      <Button
        className="bg-transparent text-orange-500 border-1 border-orange-500 max-w-[360px] min-w-[200px]"
        size="lg"
        radius="lg"
        onPress={() => setPortfolioId(data.artisanId)}
      >
        {t("visitProfileButton")}
      </Button>
    </div>
  );
}
