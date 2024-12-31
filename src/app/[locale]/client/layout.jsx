import { SideBarClient, TopBarClient } from "@/components/layout";

export default async function ClientLayout({ children }) {
  return (
    <div className="flex min-w-screen min-h-screen">
      <SideBarClient />
      <div className="w-full h-full min-h-screen flex flex-col">
        <TopBarClient />
        <div className="w-full h-full flex flex-col items-center justify-center min-h-[90vh] bg-[#F2F2F2]">
          {children}
        </div>
      </div>
    </div>
  );
}
