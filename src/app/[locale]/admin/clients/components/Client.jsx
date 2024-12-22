import SearchClient from "./SearchClient";
import ListClient from "./ListClient";

export default function Client() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <SearchClient />
      <ListClient />
    </div>
  );
}
