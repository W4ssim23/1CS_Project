"use client";

import { useDebouncedCallback } from "use-debounce";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function SearchBar({ setArtisan, searchParams }) {
  const t = useTranslations("/client.Search");
  const q = searchParams?.q;

  const handleSearch = useDebouncedCallback(async (value) => {
    const response = await fetch(
      "https://onecs-back.onrender.com/app/" + `search-artisans/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job: value }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("data:", data);
      setArtisan(data.artisans);
    } else {
      setArtisan([]);
    }
  }, 400);

  useEffect(() => {
    if (q) {
      handleSearch(q);
    }
  }, [q, handleSearch]);

  return (
    <div className="w-full flex items-center text-center max-w-[70%]">
      <div className="w-full h-full p-4 flex items-center gap-4 bg-white border border-gray-300 rounded-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M11.7429 10.8421C12.7112 9.52083 13.1449 7.88264 12.9572 6.2553C12.7695 4.62796 11.9743 3.13149 10.7307 2.06528C9.48701 0.999068 7.88665 0.441751 6.24973 0.504824C4.61282 0.567897 3.06008 1.24671 1.90217 2.40545C0.744249 3.5642 0.0665484 5.11742 0.00464653 6.75438C-0.0572553 8.39134 0.501207 9.99131 1.56831 11.2342C2.6354 12.4771 4.13244 13.2712 5.75992 13.4577C7.38739 13.6442 9.02528 13.2094 10.3459 12.2401H10.3449C10.3749 12.2801 10.4069 12.3181 10.4429 12.3551L14.2929 16.2051C14.4804 16.3928 14.7348 16.4983 15 16.4983C15.2653 16.4984 15.5198 16.3932 15.7074 16.2056C15.895 16.0181 16.0005 15.7638 16.0006 15.4985C16.0007 15.2332 15.8954 14.9788 15.7079 14.7911L11.8579 10.9411C11.8221 10.905 11.7837 10.8715 11.7429 10.8411V10.8421ZM12.0009 6.99815C12.0009 7.72042 11.8586 8.43562 11.5822 9.10291C11.3058 9.7702 10.9007 10.3765 10.39 10.8872C9.87926 11.398 9.27295 11.8031 8.60566 12.0795C7.93837 12.3559 7.22317 12.4981 6.5009 12.4981C5.77863 12.4981 5.06343 12.3559 4.39614 12.0795C3.72885 11.8031 3.12253 11.398 2.61181 10.8872C2.10109 10.3765 1.69596 9.7702 1.41956 9.10291C1.14316 8.43562 1.0009 7.72042 1.0009 6.99815C1.0009 5.53946 1.58036 4.14051 2.61181 3.10906C3.64326 2.07761 5.04221 1.49815 6.5009 1.49815C7.95959 1.49815 9.35853 2.07761 10.39 3.10906C11.4214 4.14051 12.0009 5.53946 12.0009 6.99815Z"
              fill="#6B7280"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          className="w-full h-full bg-transparent focus:outline-none placeholder-gray-500 text-gray-800"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={q || ""}
        />
      </div>
    </div>
  );
}
