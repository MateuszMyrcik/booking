import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { Dispatch, useReducer } from "react";
import { AppReducer, IAction, IState } from "../state/reducers";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export interface IAppContext {
  appDispatch: Dispatch<IAction>;
  appState: IState;
}

export const AppContext = React.createContext({} as IAppContext);

function MyApp({ Component, pageProps }: AppProps) {
  const initialState = { userLevel: 0 };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ appDispatch: dispatch, appState: state }}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
