import { nothing } from "@/assets/svgs";
import Image from "next/image";

const Chat = () => {
  return (
    <div className=" hidden sm:flex flex-col items-center justify-center w-full h-full gap-5 ">
      <Image
        className="w-[200px] sm:w-[400px] pt-[40%] sm:pt-16"
        src={nothing}
        alt=""
        priority
      />
      <div className="flex flex-col items-center *:font-kumbhfont *:text-headcolor">
        <p className=" text-center text-3xl font-[600]">Select a chat room</p>
      </div>
    </div>
  );
};

export default Chat;
