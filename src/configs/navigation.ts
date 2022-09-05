import { SiteRoutes } from "../utils/goto";

export enum PermissionLevel {
  ADMIN = 3,
  RECEPTIONIST = 2,
  USER = 1,
  GUEST = 0,
}
export interface INavigationItem {
  url: string;
  label: string;
  permissionLevel: PermissionLevel;
}

export const NavigationItems: INavigationItem[] = [
  {
    url: SiteRoutes.HOMEPAGE,
    label: "Homepage",
    permissionLevel: PermissionLevel.GUEST,
  },
  {
    url: SiteRoutes.RESERVATIONS,
    label: "Reservations",
    permissionLevel: PermissionLevel.USER,
  },
  {
    url: SiteRoutes.USERS,
    label: "Users",
    permissionLevel: PermissionLevel.ADMIN,
  },
  {
    url: SiteRoutes.ROOMS,
    label: "Rooms",
    permissionLevel: PermissionLevel.RECEPTIONIST,
  },
  {
    url: SiteRoutes.RESERVE_ROOMS,
    label: "Find room",
    permissionLevel: PermissionLevel.GUEST,
  },
];
