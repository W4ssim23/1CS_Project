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
} from "@/assets/svgs";
export const itemsAdmin = [
  {
    title: "Tableau de bord",
    link: "#",
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
