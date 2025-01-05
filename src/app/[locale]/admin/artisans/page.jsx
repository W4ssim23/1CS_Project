import AddArtisan from "./components/AddArtisan";
import Artisan from "./components/Artisan";

export default async function ArtisansPage() {
  return (
    <div className="w-full h-full min-h-[90vh] flex flex-col items-center p-6 gap-5">
      {/* <AddArtisan /> */}
      <Artisan />
    </div>
  );
}
