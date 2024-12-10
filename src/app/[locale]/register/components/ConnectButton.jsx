import { Link } from "@/i18n/routing";

export default function ConnectButton() {
  return (
    <div className="flex flex-col gap-4">
      <h1>vous avez déja un compte ?</h1>
      <Link href="/login">
        <button className=" text-[#FFA500] text-center font-medium  border-[#FFA500] border-small bg-[#F3F3F3] rounded-md py-3 px-4 min-w-[222px]">
          se connecté
        </button>
      </Link>
    </div>
  );
}
