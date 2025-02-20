"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ArtisanList from "./components/ArtisanList";
import Image from "next/image";
import Portfolio from "./components/Portfolio";

export default function Search({ searchParams }) {
  const [artisan, setArtisan] = useState([]);
  const [portfolioId, setPortfolioId] = useState(null);

  if (portfolioId) {
    const selectedArtisan = artisan.find((a) => a.artisanId === portfolioId);
    return (
      <div className="w-full min-h-[95vh] flex flex-col items-center justify-start p-4 gap-8">
        <Portfolio
          searchParams={{ id: portfolioId }}
          userDataa={selectedArtisan}
          setPortfolioId={setPortfolioId}
        />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[95vh] flex flex-col items-center justify-start p-4 gap-8">
      <SearchBar setArtisan={setArtisan} searchParams={searchParams} />
      {!artisan.length && <GotNothing />}
      <ArtisanList artisans={artisan} setPortfolioId={setPortfolioId} />
    </div>
  );
}

import { nothing } from "@/assets/svgs";
import { useTranslations } from "next-intl";

function GotNothing() {
  const t = useTranslations("/client.Search");
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px]">
      <Image src={nothing} alt="nothing" priority />
      <p className="font-semibold text-[20px]">
        {t("noArtisan.title1")}{" "}
        <span className="text-[#FFA500]">{t("noArtisan.title2")}</span>
      </p>
    </div>
  );
}
