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
    title: "dashboard",
    svg: dashboard,
    page: "/admin/dashboard",
    svgSelected: dashSelected,
  },
  {
    title: "tasks",
    svg: checklist,
    svgSelected: tachSelected,
    page: "/admin/taches",
  },
  {
    title: "clients",
    svg: client,
    svgSelected: clientSelected,
    page: "/admin/clients",
  },
  {
    title: "artisans",
    svg: men,
    svgSelected: artisanSelected,
    page: "/admin/artisans",
  },
  {
    title: "services",
    svg: restore,
    svgSelected: serviceSelected,
    page: "/admin/services",
  },
  {
    title: "demandes",
    svg: calendar,
    svgSelected: demandeSelected,
    page: "/admin/demandes",
  },
];

export const itemsClient = [
  {
    title: "profile",
    svg: profile,
    page: "/client/profile",
    svgSelected: profileSelected,
  },
  {
    title: "deals",
    svg: deals,
    svgSelected: dealsSelected,
    page: "/client/deals",
  },
  {
    title: "devis",
    svg: devis,
    svgSelected: devisSelected,
    page: "/client/devis",
  },
  {
    title: "pannier",
    svg: pannier,
    svgSelected: pannierSelected,
    page: "/client/pannier",
  },
  {
    title: "chat",
    svg: chat,
    svgSelected: chatSelected,
    page: "/client/chat",
  },
];

export const itemsArtisan = [
  {
    title: "profile",
    svg: profile,
    page: "/artisan/profile",
    svgSelected: profileSelected,
  },
  {
    title: "deals",
    svg: deals,
    svgSelected: dealsSelected,
    page: "/artisan/deals",
  },
  {
    title: "devis",
    svg: devis,
    svgSelected: devisSelected,
    page: "/artisan/devis",
  },
  {
    title: "chat",
    svg: chat,
    svgSelected: chatSelected,
    page: "/artisan/chat",
  },
];
