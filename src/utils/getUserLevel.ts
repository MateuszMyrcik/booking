import { PermissionLevel } from "../configs/navigation";

export type PERMISSION_ROLE =
  | "ROLE_USER"
  | "ROLE_GUEST"
  | "ROLE_ADMIN"
  | "ROLE_RECEPTIONIST";

export const getUserLevel = (role: PERMISSION_ROLE) => {
  switch (role) {
    case "ROLE_ADMIN":
      return PermissionLevel.ADMIN;
    case "ROLE_RECEPTIONIST":
      return PermissionLevel.RECEPTIONIST;
    case "ROLE_USER":
      return PermissionLevel.USER;
    case "ROLE_GUEST":
    default:
      return PermissionLevel.GUEST;
  }
};
