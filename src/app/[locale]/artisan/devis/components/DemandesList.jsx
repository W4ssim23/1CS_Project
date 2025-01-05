import GotNothing from "./GotNothing";
import Demande from "./Demande";

export default function DemandesList({ demandes }) {
  if (demandes?.lenght === 0)
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
    </div>
  );
}
