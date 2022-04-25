export interface INavigationItem {
  url: string;
  label: string;
}

export const NavigationItems: INavigationItem[] = [
  {
    url: "/",
    label: "Homepage",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];
