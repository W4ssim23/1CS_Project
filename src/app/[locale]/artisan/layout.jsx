import SideBarArtisan from "@/components/layout/SideBarArtisan";
import TopBarArtisan from "@/components/layout/TopBarArtisan";

export default async function ArtisanLayout({ children }) {
  return (
    <div className="flex min-w-screen min-h-screen">
      <SideBarArtisan />
      <div className="w-full h-full min-h-screen flex flex-col">
        <TopBarArtisan />
        <div className="w-full h-full flex flex-col items-center justify-center min-h-[90vh] bg-[#F2F2F2]">
          {children}
        </div>
      </div>
    </div>
  );
}
