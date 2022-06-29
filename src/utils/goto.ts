import { useRouter } from "next/router";

export enum SiteRoutes {
  HOMEPAGE = "/",
  CONTACT = "/contact",
  SEARCH_RESULTS = "/search-results",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  ADMIN_PANEL = "/admin-panel",
  RECEPTIONIST_PANEL = "/receptionist-panel",
  CHECKOUT = "/checkout",
}

export const GoTo = (url: SiteRoutes, param?: string = "") => {
  const router = useRouter();
  const mappedUrl = `${url}${param}`;

  return () => router.push(mappedUrl);
};
