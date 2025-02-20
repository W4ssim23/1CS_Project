import { Link } from "@/i18n/routing";
import { Avatar } from "@nextui-org/react";

const Conversation = ({ data, id }) => {
  return (
    <Link
      href={`/client/chat/${data.other_user.id}?title=${data.other_user.first_name}&pfp=${data.other_user.pfp}&id=${id}`}
    >
      <div className=" cursor-pointer hover:bg-bgfakeWhite p-3  md:border-b-[2px] flex gap-2 py-4 justify-between  w-full">
        {data.other_user.pfp ? (
          <Avatar
            src={data.other_user.pfp}
            alt={data.other_user.first_name}
            size="md"
          />
        ) : (
          <div className="w-[45px] h-[45px] bg-primary rounded-full"></div>
        )}
        <div className="flex-1 sm:flex flex-col gap-1 hidden">
          <p className="text-[#303972] text-[16px] font-[600]">
            {data.other_user.first_name}
          </p>
          <p className="text-[#A098AE] text-[12px] font-[400]">
            {"click to get to the chat ...."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Conversation;
