import DemandesList from "./components/DemandesList";

//fetched from the server
const exampleData = [
  {
    demandeId: 1,
    userName: "Zouitene Ouassim",
    avatar:
      "https://lastfm.freetls.fastly.net/i/u/ar0/c727ac2a12a296b7f62549def8d6b537.jpg",
    title:
      "Bonjour admin, je veux ajouter un nouveau service, voici tous les details...",
    files: [
      {
        link: "https://www.youtube.com/watch?v=qAsHVwl-MU4",
        name: "details du services",
      },
    ],
  },
  {
    demandeId: 2,
    userName: "Kanye west",
    avatar:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/10/kanye-west-triste.jpg",
    title:
      "Bonjour admin, je veux ajouter un nouveau service, voici tous les details...",
    files: [],
  },
  {
    demandeId: 3,
    userName: "Akira Akao",
    avatar:
      "https://i.pinimg.com/474x/53/4f/29/534f2998608e8132cd84fc8c18030c77.jpg",
    title:
      "Bonjour admin, je veux ajouter un nouveau service, voici tous les details...",
    files: [
      {
        link: "https://www.youtube.com/watch?v=qAsHVwl-MU4",
        name: "details du services",
      },
      {
        link: "https://www.youtube.com/watch?v=ivCY3Ec4iaU",
        name: "autre details du services",
      },
    ],
  },
  {
    demandeId: 4,
    userName: "Lionel Messi",
    avatar:
      "https://yop.l-frii.com/wp-content/uploads/2024/10/Le-premier-contrat-de-Lionel-Messi-avec-le-FC-Barcelone-a-ete-signe-sur-une-serviette-en-papier-retour-sur-les-debuts-incroyables-de-la-Pulga-1024x640.jpg",
    title:
      "Bonjour admin, je veux ajouter un nouveau service, voici tous les details...",
    files: [
      {
        link: "https://www.youtube.com/watch?v=qAsHVwl-MU4",
        name: "details du services",
      },
    ],
  },
  {
    demandeId: 5,
    userName: "Elon Musk",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    title:
      "Bonjour admin, je veux ajouter un nouveau service, voici tous les details...",
    files: [
      {
        link: "https://www.youtube.com/watch?v=qAsHVwl-MU4",
        name: "details du services",
      },
    ],
  },
];

export default async function DemandesPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center py-5">
      <DemandesList demandes={exampleData} />
    </div>
  );
}
