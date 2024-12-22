import {
  calendar,
  checklist,
  client,
  dashboard,
  googledocs,
  men,
  restore,
} from "@/assets/svgs";
export const itemsAdmin = [
  {
    title: "Tableau de bord",
    link: "#",
    svg: dashboard,
    page: "/admin/dashboard",
  },
  { title: "Taches", svg: checklist, page: "/admin/taches" },
  { title: "Clients", svg: client, page: "/admin/clients" },
  { title: "Artisans", svg: men, page: "/admin/artisans" },
  { title: "Services", svg: restore, page: "/admin/services" },
  { title: "Calendrier", svg: calendar, page: "/admin/calendrier" },
  { title: "Documents", svg: googledocs, page: "/admin/docm" },
];
