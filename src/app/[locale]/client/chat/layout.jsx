"use client";

import { Inbox, MobileInbox } from "./components";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="font-poppins h-[88vh] sm:h-[80vh] w-[85%] sm:mb-0 mb-[30px] flex flex-col gap-5 sm:gap-9">
      <div className="relative flex rounded-xl bg-white justify-center overflow-hidden select-none gap-0 h-screen mt-8 sm:mt-0">
        <div className="h-full hidden sm:flex">
          <Inbox id={id} />
        </div>
        <MobileInbox id={id} />
        <div className="flex-1">{children}</div>
      </div>
      <div className="sm:hidden">
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
