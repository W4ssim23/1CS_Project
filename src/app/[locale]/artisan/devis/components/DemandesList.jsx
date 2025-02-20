import GotNothing from "./GotNothing";
import Demande from "./Demande";

export default function DemandesList({ demandes, searchParams, t }) {
  if (demandes?.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center px-24">
        <GotNothing
          title={t("noDemands.title")}
          description={t("noDemands.description")}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 px-3 sm:px-0">
      {demandes?.map((demande, idx) => (
        <Demande key={idx} data={demande} searchParams={searchParams} t={t} />
      ))}
    </div>
  );
}
