"use client";

import { useEffect, useState } from "react";
import Conversation from "./Conversation";
import SearchBar from "./SearchBar";

const exampleRooms = [
  {
    id: 1, //conversation id and not the user id
    name: "Kanye West",
    pfp: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/10/kanye-west-triste.jpg",
  },
  {
    id: 2,
    name: "Frankou",
    pfp: "https://lastfm.freetls.fastly.net/i/u/ar0/c727ac2a12a296b7f62549def8d6b537.jpg",
  },
];

const Inbox = () => {
  //rooms will be passed as an argument and fetched in the layout instead
  const [rooms, setRooms] = useState(exampleRooms);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("/api/chat", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!response.ok) {
  //         console.log("Failed to fetch rooms");
  //         setRooms([]);
  //         return;
  //       }

  //       const data = await response.json();
  //       setRooms(data.rooms);
  //       setRoomsId(data.roomsId);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRooms();
  // }, []);

  if (isLoading || !rooms) return <SkeletonInbox />;

  return (
    <div className="sm:py-9 sm:pl-7  flex flex-col gap-[30px] overflow-y-scroll border-r-2 md:min-w-60">
      <h1 className="text-[rgb(48,57,114)] text-[20px] font-[600] hidden sm:block">
        Messages
      </h1>
      <div className="hidden sm:block">
        <SearchBar />
      </div>
      {Boolean(rooms.length) && (
        <div className="flex flex-col gap-3 bg-bgfakeWhite rounded-tl-xl rounded-bl-xl items-center sm:items-start p-2 sm:bg-white">
          <div className="flex flex-col">
            {rooms.map((room, index) => (
              <Conversation data={room} key={index} />
            ))}
          </div>
        </div>
      )}
      <div className="sm:hidden">
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Inbox;

const SkeletonInbox = () => {
  return (
    <div className="sm:py-9 sm:pl-7 flex flex-col gap-[30px] overflow-y-scroll border-r-2 animate-pulse">
      <div className="h-[20px] bg-gray-200 rounded-md hidden sm:block w-[120px]"></div>
      <div className="hidden sm:block">
        <div className="h-[20px] bg-gray-200 w-[190px] rounded-md mr-4"></div>
      </div>
      <div className="flex flex-col gap-3 bg-bgfakeWhite rounded-tl-xl rounded-bl-xl items-center sm:items-start p-2 sm:bg-white">
        <div className="h-[20px] bg-gray-200 rounded-md hidden sm:block w-[80px]"></div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"></div>
              <div className="h-[20px] bg-gray-200 rounded-md flex-1"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-bgfakeWhite rounded-tl-xl rounded-bl-xl items-center sm:items-start p-2 sm:bg-white">
        <div className="h-[20px] bg-gray-200 rounded-md hidden sm:block w-[80px]"></div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"></div>
              <div className="h-[20px] bg-gray-200 rounded-md flex-1"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
