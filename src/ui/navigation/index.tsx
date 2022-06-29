/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import * as React from "react";
import { INavigationItem } from "../../configs/navigation";
import { AppContext } from "../../pages/_app";
import { AppActionType } from "../../state/reducers";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { ButtonComponent } from "../button";

interface INavigationComponent {
  items: INavigationItem[];
}

export const Navigation: React.FC<INavigationComponent> = ({ items }) => {
  const { appState, appDispatch } = React.useContext(AppContext);

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

            {appState.user ? (
              <div className="flex items-center justify-between flex-1 gap-8 sm:justify-end">
                <button
                  type="button"
                  className="flex items-center transition rounded-lg group shrink-0"
                >
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={appState.user.photo}
                    alt="Simon Lewis"
                  />

                  <p className="hidden ml-2 text-xs text-left sm:block">
                    <strong className="block font-medium">
                      {appState.user.username}
                    </strong>

                    <span className="text-gray-500">{appState.user.email}</span>
                  </p>
                </button>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      appDispatch({
                        type: AppActionType.SET_USER,
                        payload: false,
                      });
                    }}
                    className="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </header>
    </nav>
  );
};
