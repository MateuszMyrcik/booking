import { SiteRoutes } from "../utils/goto";

export interface INavigationItem {
  url: string;
  label: string;
}

export const NavigationItems: INavigationItem[] = [
  {
    url: SiteRoutes.HOMEPAGE,
    label: "Homepage",
  },
  // {
  //   url: SiteRoutes.CONTACT,
  //   label: "Contact",
  // },
  {
    url: SiteRoutes.ADMIN_PANEL,
    label: "Admin Panel",
  },
  {
    url: SiteRoutes.RECEPTIONIST_PANEL,
    label: "Receptionist Panel",
  },
];
