import { useRouter } from "next/router";

export enum SiteRoutes {
  HOMEPAGE = "/",
  CONTACT = "/contact",
  RESERVE_ROOMS = "/reserve-rooms",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  USERS = "/users",
  ROOMS = "/rooms",
  ROOM = "/room",
  CHECKOUT = "/checkout",
  SUMMARY = "/summary",
  RESERVATIONS = "/reservations",
}

export const GoTo = (url: SiteRoutes, param?: string) => {
  const router = useRouter();
  const paramm = param ? param : "";
  const mappedUrl = `${url}${paramm}`;

  return () => router.push(mappedUrl);
};
