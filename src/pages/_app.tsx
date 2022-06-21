import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { Dispatch, useReducer } from "react";
import { AppReducer, IAction, IState } from "../state/reducers";
import { makeServer } from "../server/fake-data";

export interface IAppContext {
  appDispatch: Dispatch<IAction>;
  appState: IState;
}

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

export const AppContext = React.createContext({} as IAppContext);

function MyApp({ Component, pageProps }: AppProps) {
  const initialState = {
    isUserLogged: false,
    isAdmin: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <>
      <Head>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <AppContext.Provider value={{ appDispatch: dispatch, appState: state }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
