//search
//list
//locale context lahna
//balak fetdh nhoto lahna
import SearchArtisan from "./SearchArtisan";
import ListArtisan from "./ListArtisan";

export default function Artisan() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <SearchArtisan />
      <ListArtisan />
    </div>
  );
}
