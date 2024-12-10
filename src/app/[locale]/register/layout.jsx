import Image from "next/image";
import { Logo } from "@/assets/svgs";

export const metadata = {
  title: "Register",
  description: "Register page",
};

export default function RootLayout({ children }) {
  return (
    <main className="h-full w-full  min-w-screen min-h-screen">
      <Image src={Logo} alt="Logo" className="ml-7 mt-5" />
      {children}
    </main>
  );
}
