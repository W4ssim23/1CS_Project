import Image from "next/image";
import { Logo } from "@/assets/svgs";

export const metadata = {
  title: "Login",
  description: "Login page",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-full w-full  min-w-screen">
      <Image src={Logo} alt="Logo" className="ml-7 mt-5" />
      {children}
    </div>
  );
}
