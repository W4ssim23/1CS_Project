import Image from "next/image";
import { welcomeGuy } from "@/assets/svgs";
import { Button } from "@nextui-org/react";

export default function WelcomeBlock() {
  return (
    <main className="flex w-full h-full flex-wrap md:flex-nowrap items-center">
      <div className="h-full flex flex-col w-full md:w-[60%] gap-14 items-center">
        <p className=" text-[30px] mt-3 sm:mt-0 sm:text-[58px] text-center max-w-[600px] font-bold motion-preset-blur-right motion-duration-700">
          Trouver les meilleurs
          <span className="text-[#FFA500]"> Artisans </span>
          pour tous vos services
        </p>
        <p className="text-center max-w-[480px] text-[18px] sm:text-[24px] font-semibold text-[#00000052] motion-preset-blur-right motion-duration-800">
          Trouvez un constructeur, un plombier, un peintre et plus encore.
        </p>
        <Button
          className="text-white bg-[#1F4690] w-[180px] h-[45px] hidden md:block motion-preset-blur-right motion-duration-900"
          radius="sm"
        >
          Découvrir plus
        </Button>
      </div>
      <div className="w-full md:w-[40%] flex items-center justify-center mt-8 md:mt-0">
        <Image
          src={welcomeGuy}
          alt="welcImg"
          className="max-h-96 md:max-h-full"
          priority
        />
        {/* <Button
          className="text-white bg-[#1F4690] w-[180px] h-[45px] sm:hidden block"
          radius="sm"
        >
          Découvrir plus
        </Button> */}
      </div>
    </main>
  );
}
