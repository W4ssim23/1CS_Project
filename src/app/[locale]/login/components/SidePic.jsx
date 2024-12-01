import { registerPic } from "@/assets/svgs";
import Image from "next/image";

export default function SidePic() {
  return (
    <div
      data-testid="side-pic"
      className="h-full w-full flex flex-col md:items-start items-center gap-14 py-10 md:gap-10 md:p-10 md:pl-16 md:min-w-[60%]"
    >
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-normal gap-5">
        <p className=" text-center text-3xl font-semibold tracking-wide">
          BIENVENUE SUR DZ-ARTISAN!
        </p>
        <p className=" text-gray-400 text-center ">
          Rejoignez-nous, nous apprécions votre soutien.
        </p>
      </div>

      <Image src={registerPic} alt="Register" className="" />
    </div>
  );
}
