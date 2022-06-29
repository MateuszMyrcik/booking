import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useContext } from "react";
import { fetchData } from "../../api/booking-service";
import { IUserData } from "../../api/booking-service/types";
import { AppActionType, AppReducer } from "../../state/reducers";
import { MasterLayoutComponent } from "../../ui/master-layout";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { AppContext } from "../_app";

const Login: NextPage = () => {
  const router = useRouter();

  const { appState, appDispatch } = useContext(AppContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appDispatch({ type: AppActionType.SET_USER, payload: true });

    const username = e.target.username.value as string;
    const password = e.target.password.value as string;

    // const data = await fetchData("/rooms");
    const authToken = await fetchData(
      "/login",
      { username: username, password: password },
      "POST"
    );

    const user = await fetchData("/users/admin");
    const data = user.data as IUserData;

    if (authToken) {
      appDispatch({
        type: AppActionType.SET_USER,
        payload: {
          email: data.email,
          username: data.username,
          photo: data.photoURI,
          name: data.name,
          surname: data.surname,
          dateOfBirth: data.dateOfBirth,
          phoneNumber: data.phoneNumber,
        },
      });
      router.push(SiteRoutes.HOMEPAGE);
    }

    // TODO: connect with DATA
  };

  return (
    <MasterLayoutComponent>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-blue-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <p className="text-lg font-medium">Sign in to your account</p>

              <div>
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>

                <div className="relative mt-1">
                  <input
                    type="username"
                    id="username"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    type="password"
                    id="password"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter password"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg"
              >
                Sign in
              </button>
            </form>
            <p className="text-sm text-center text-gray-500">
              No account?
              <button
                type="reset"
                className="underline"
                onClick={GoTo(SiteRoutes.REGISTRATION)}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default Login;
