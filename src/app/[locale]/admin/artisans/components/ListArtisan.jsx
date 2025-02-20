"use client";
import Image from "next/image";
import { nothing } from "@/assets/svgs";
import TheList from "./TheList";
import { useState, useEffect, useContext } from "react";
import { ArtisanContext } from "../artisanContext";
import { Button } from "@nextui-org/react";
import { LoadingSpinner } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function ListArtisan() {
  const { page, setPage, data, setData, totalPages, setTotalPages, search } =
    useContext(ArtisanContext);
  const [loading, setLoading] = useState(true);
  const [paginloading, setPaginLoading] = useState(false);
  const t = useTranslations("/admin.ListArtisan");

  useEffect(() => {
    const getArtisan = async () => {
      setPaginLoading(true);
      try {
        const response = await fetch(
          "https://onecs-back.onrender.com/app/" +
            "admin/artisans/?page=" +
            page +
            "&name=" +
            search,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setData(data.artisans);
          setTotalPages(data.pagination.totalPages);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
        setPaginLoading(false);
      }
    };

    getArtisan();
  }, [page, setTotalPages]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!data?.length) return <GotNothing />;

  return (
    <>
      <TheList artisans={data} />
      <div className="flex justify-center mt-4">
        <Button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 mx-2 bg-[#FFA500] text-white rounded disabled:bg-gray-300"
          isLoading={paginloading}
        >
          {t("previousButton")}
        </Button>
        <span className="px-4 py-2">
          {t("page")} {page} {t("of")} {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 mx-2 bg-[#FFA500] text-white rounded disabled:bg-gray-300"
          isLoading={paginloading}
        >
          {t("nextButton")}
        </Button>
      </div>
    </>
  );
}

function GotNothing() {
  const t = useTranslations("/admin.ListArtisan");
  return (
    <div className=" bg-white w-full h-full flex flex-col items-center justify-center gap-3 text-[#4F4F4F] text-center min-h-[535px] ">
      <Image src={nothing} alt="nothing" priority />
      <p className=" font-semibold text-[20px]">
        {t("noArtisans")} <span className="text-[#FFA500]">{t("Artisan")}</span>{" "}
        {t("moment")}
      </p>
      <p>{t("noArtisansDescription")}</p>
    </div>
  );
}
