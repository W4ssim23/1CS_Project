import { Button } from "@nextui-org/react";

export default function AddArtisan() {
  return (
    <div className="w-full flex items-center justify-between p-3 px-5 text-center bg-white">
      <p className=" text-[16px] font-semibold">Artisans</p>
      <Button
        className="bg-[#509CDB] text-white text-[13px] p-4"
        href="#"
        variant="flat"
        radius="sm"
        // onClick={() => {
        //   console.log("search");
        // }}
      >
        Nouveau Artisan
      </Button>
    </div>
  );
}
