"use client";

// import Search from "./Search";
import { Input } from "@nextui-org/react";
// import { useDebouncedCallback } from "use-debounce";
// import { useContext } from "react";
// import FetchingContext from "@/app/context";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  //   const { setStudents, setTeachers, setRooms } = useContext(FetchingContext);
  const pathname = usePathname();

  //   const handleSearch = useDebouncedCallback(
  //     async (e) => {
  //       // console.log("searching for:", e.target.value);
  //       // console.log("pathname:", pathname);
  //       if (pathname === "/students") {
  //         const response = await fetch(`/api/students?search=${e.target.value}`, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         if (response.ok) {
  //           const data = await response.json();
  //           // console.log("data:", data.students);
  //           setStudents(data.students);
  //         }
  //         //else a toast message will be shown
  //       } else if (pathname === "/teachers") {
  //         const response = await fetch(`/api/teachers?search=${e.target.value}`, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         if (response.ok) {
  //           const data = await response.json();
  //           // console.log("data:", data.teachers);
  //           setTeachers(data.teachers);
  //         }
  //       } else {
  //         const response = await fetch(`/api/chat?search=${e.target.value}`, {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         if (response.ok) {
  //           const data = await response.json();
  //           // console.log("data:", data);
  //           setRooms(data.rooms);
  //         }
  //       }
  //     },

  //     400
  //   );

  return (
    <Input
      isClearable
      radius="full"
      classNames={{
        input: [
          "bg-transparent",
          "text-black/90",
          "placeholder:text-default-700/50",
          "h-12",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "bg-white",
          "backdrop-blur-lg",
          "backdrop-saturate-200",
          "hover:bg-white/90",
          "group-data-[focus=true]:bg-white",
          "!cursor-text",
          "h-12",
        ],
      }}
      placeholder="Search..."
      startContent={
        <div className="mb-0.5 text-slate-400 pointer-events-none flex-shrink-0">
          <Search />
        </div>
      }
      //   onChange={handleSearch}
    />
  );
};

export default SearchBar;

function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#4D44B5"
        d="M27.6 25.8L22 20.2c1.3-1.7 2.1-3.8 2.1-6.1 0-5.5-4.5-10-10-10S4 8.6 4 14.1s4.5 10 10 10c2.3 0 4.5-.8 6.2-2.2l5.6 5.6c.2.2.6.4.9.4.3 0 .6-.1.9-.4.5-.4.5-1.2 0-1.7zM6.5 14.1c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.3-7.5-7.5z"
      ></path>
    </svg>
  );
}
