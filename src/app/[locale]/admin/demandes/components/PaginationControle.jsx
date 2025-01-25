"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function PaginationControle({ pagination }) {
  const router = useRouter();
  const handlePageChange = (newPage) => {
    router.push(`/demandes?page=${newPage}`);
  };
  return (
    <div className="flex gap-2 mt-4">
      <Button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </Button>
      <span className="px-4 py-2">
        Page {pagination.currentPage} of {pagination.totalPages}
      </span>
      <Button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Next
      </Button>
    </div>
  );
}
