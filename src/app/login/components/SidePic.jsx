import { registerPic } from "@/assets/svgs";
import Image from "next/image";

export default function SidePic() {
  return (
    <div className="h-full w-full flex flex-col items-start gap-10 p-10 pl-16">
      <div className="flex flex-col gap-5">
        <p className=" text-center text-3xl font-semibold tracking-wide">
          BIENVENUE SUR DZ-ARTISAN!
        </p>
        <p className=" text-gray-400">
          Rejoignez-nous, nous apprécions votre soutien.
        </p>
      </div>

      <Image src={registerPic} alt="Register" />
    </div>
  );
}
