import GotNothing from "./GotNothing";
import Demande from "./Demande";
import PaginationControle from "./PaginationControle";

export default function DemandesList({ demandes, pagination }) {
  if (demandes?.length === 0)
    return (
      <div className="w-full h-full flex flex-col items-center px-24">
        <GotNothing />
      </div>
    );

  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      {demandes?.map((demande, idx) => (
        <Demande key={idx} data={demande} />
      ))}
      <PaginationControle pagination={pagination} />
    </div>
  );
}
