import {
  calendar,
  checklist,
  client,
  dashboard,
  men,
  restore,
  dashSelected,
  tachSelected,
  clientSelected,
  artisanSelected,
  serviceSelected,
  demandeSelected,
  profile,
  deals,
  devis,
  pannier,
  chat,
  profileSelected,
  dealsSelected,
  devisSelected,
  pannierSelected,
  chatSelected,
} from "@/assets/svgs";

export const itemsAdmin = [
  {
    title: "Tableau de bord",
    svg: dashboard,
    page: "/admin/dashboard",
    svgSelected: dashSelected,
  },
  {
    title: "Taches",
    svg: checklist,
    svgSelected: tachSelected,
    page: "/admin/taches",
  },
  {
    title: "Clients",
    svg: client,
    svgSelected: clientSelected,
    page: "/admin/clients",
  },
  {
    title: "Artisans",
    svg: men,
    svgSelected: artisanSelected,
    page: "/admin/artisans",
  },
  {
    title: "Services",
    svg: restore,
    svgSelected: serviceSelected,
    page: "/admin/services",
  },
  {
    title: "Demandes",
    svg: calendar,
    svgSelected: demandeSelected,
    page: "/admin/demandes",
  },
];

export const itemsClient = [
  {
    title: "Modifier mon profil",
    svg: profile,
    page: "/client/profile",
    svgSelected: profileSelected,
  },
  {
    title: "Suivi des travaux",
    svg: deals,
    svgSelected: dealsSelected,
    page: "/client/deals",
  },
  {
    title: "Demande de devis",
    svg: devis,
    svgSelected: devisSelected,
    page: "/client/devis",
  },
  {
    title: "Mon pannier",
    svg: pannier,
    svgSelected: pannierSelected,
    page: "/client/pannier",
  },
  {
    title: "Ma messagerie",
    svg: chat,
    svgSelected: chatSelected,
    page: "/client/chat",
  },
];

export const itemsArtisan = [
  {
    title: "Profil",
    svg: profile,
    page: "/client/profile",
    svgSelected: profileSelected,
  },
  {
    title: "Taches",
    svg: deals,
    svgSelected: dealsSelected,
    page: "/client/deals",
  },
  {
    title: "Demandes des clients",
    svg: devis,
    svgSelected: devisSelected,
    page: "/client/devis",
  },
  {
    title: "Ma messagerie",
    svg: chat,
    svgSelected: chatSelected,
    page: "/client/chat",
  },
];
