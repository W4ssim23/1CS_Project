"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function PaginationControle({ pagination }) {
  const t = useTranslations("/admin.DemandesList.pagination");
  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300"
      >
        {t("previous")}
      </Button>
      <span className="px-4 py-2">
        {t("pageInfo", {
          currentPage: pagination.currentPage,
          totalPages: pagination.totalPages,
        })}
      </span>
      <Button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
        className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300"
      >
        {t("next")}
      </Button>
    </div>
  );
}
