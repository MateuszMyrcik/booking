import { useRouter } from "next/router";

export enum SiteRoutes {
  HOMEPAGE = "/",
  CONTACT = "/contact",
  SEARCH_RESULTS = "/search-results",
  LOGIN = "/login",
  REGISTRATION = "/registration",
  ADMIN_PANEL = "/admin-panel",
  RECEPTIONIST_PANEL = "/receptionist-panel",
}

export const GoTo = (url: SiteRoutes) => {
  const router = useRouter();

  return () => router.push(url);
};
