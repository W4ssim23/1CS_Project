"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/routing";
import SearchBar from "./SearchBar";

const exampleRooms = [
  {
    id: 1,
    name: "Kanye West",
    pfp: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/10/kanye-west-triste.jpg",
  },
];

const MobileInbox = () => {
  //rooms will be passed as an argument and fetched in the layout instead , same for loadind
  const [rooms, setRooms] = useState(exampleRooms);
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();

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

  // console.log(pathname);

  if (pathname && pathname !== "/client/chat") return null;

  if (isLoading || !rooms) return <SkeletonInbox />;

  return (
    <div className="h-full w-full sm:hidden flex">
      <div className="sm:py-9 sm:pl-7  flex flex-col gap-[30px] overflow-y-scroll border-r-2 h-full w-full">
        <div className="mt-4 mx-4 rounded-full shadow-sm">
          <SearchBar />
        </div>
        {Boolean(rooms.length) && (
          <div className="flex flex-col gap-3 rounded-tl-xl rounded-bl-xl items-start p-2 sm:bg-white">
            <div className="flex flex-col w-full">
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
    </div>
  );
};

export default MobileInbox;

import { Link } from "@/i18n/routing";
import { Avatar } from "@nextui-org/react";

//read and last message hour will be added later
const Conversation = ({ data }) => {
  return (
    <Link href={`chat/${data.id}?title=${data.name}`} className="w-full">
      <div className=" cursor-pointer hover:bg-bgfakeWhite p-3  md:border-b-[2px] flex gap-2 py-4 justify-between  w-full">
        {data.pfp ? (
          <Avatar src={data.pfp} alt={data.name} size="md" />
        ) : (
          <div className="w-[45px] h-[45px] bg-primary rounded-full mr-2"></div>
        )}
        <div className="flex-1 flex flex-col gap-1 w-full">
          <p className="text-[#303972] text-[16px] font-[600]">{data.name}</p>
          <p className="text-[#A098AE] text-[12px] font-[400]">
            {"click to get to the chat ...."}
          </p>
        </div>
        <div className=" flex-col items-end gap-[9px] flex"></div>
      </div>
    </Link>
  );
};

const SkeletonInbox = () => {
  return (
    <div className="h-full w-full sm:hidden flex">
      <div className="sm:py-9 sm:pl-7 flex flex-col gap-[30px] overflow-y-scroll border-r-2 animate-pulse w-full h-full">
        <div className="h-[20px] bg-gray-200 rounded-md  w-[120px]"></div>
        <div className="">
          <div className="h-[20px] bg-gray-200 w-[190px] rounded-md mr-4"></div>
        </div>
        <div className="flex flex-col gap-3  rounded-tl-xl rounded-bl-xl items-start p-2 ">
          <div className="h-[20px] bg-gray-200 rounded-md  w-[80px]"></div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-gray-200 rounded-full"></div>
                <div className="h-[20px] bg-gray-200 rounded-md flex-1"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-tl-xl rounded-bl-xl items-start p-2 ">
          <div className="h-[20px] bg-gray-200 rounded-md  w-[80px]"></div>
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
    </div>
  );
};
