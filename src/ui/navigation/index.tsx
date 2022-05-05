import { useRouter } from "next/router";
import * as React from "react";
import { INavigationItem } from "../../configs/navigation";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { ButtonComponent } from "../button";

interface INavigationComponent {
  items: INavigationItem[];
}

export const Navigation: React.FC<INavigationComponent> = ({ items }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-10">
      <header className="shadow-sm">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              {items.map((item) => (
                <button
                  key={item.url}
                  type="button"
                  onClick={GoTo(item.url as SiteRoutes)}
                  className="text-gray-500"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <button
                className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                onClick={GoTo(SiteRoutes.LOGIN)}
              >
                Log in
              </button>

              <button
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                onClick={GoTo(SiteRoutes.REGISTRATION)}
              >
                Sign up
              </button>
            </div>

            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 bg-gray-100 rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};
