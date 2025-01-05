import DemandesList from "./components/DemandesList";

//fetched from the server
const exampleData = [
  {
    demandeId: 1,
    userName: "Zouitene Ouassim",
    avatar:
      "https://lastfm.freetls.fastly.net/i/u/ar0/c727ac2a12a296b7f62549def8d6b537.jpg",
    title: "I have a table that needs to be repaired",
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
      "Water leak in the kitchen, I need a plumber to fix it as soon as possible",
    files: [],
  },
  {
    demandeId: 3,
    userName: "Akira Akao",
    avatar:
      "https://i.pinimg.com/474x/53/4f/29/534f2998608e8132cd84fc8c18030c77.jpg",
    title: "I need a carpenter to make a new wardrobe for my bedroom",
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
];

export default async function DemandesPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center py-5">
      <DemandesList demandes={exampleData} />
    </div>
  );
}
