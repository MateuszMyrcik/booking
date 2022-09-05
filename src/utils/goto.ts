import { useRouter } from "next/router";

export enum SiteRoutes {
  HOMEPAGE = "/",
  CONTACT = "/contact",
  RESERVE_ROOMS = "/reserve-rooms",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  USERS = "/users",
  ROOMS = "/rooms",
  CHECKOUT = "/checkout",
  SUMMARY = "/summary",
  RESERVATIONS = "/reservations",
}

export const GoTo = (url: SiteRoutes, param?: string = "") => {
  const router = useRouter();
  const mappedUrl = `${url}${param}`;

  return () => router.push(mappedUrl);
};
