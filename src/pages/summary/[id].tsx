import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { MasterLayoutComponent } from "../../ui/master-layout";
import { useRouter } from "next/router";
import { SiteRoutes } from "../../utils/goto";
import { ButtonComponent } from "../../ui/button";
import { AppContext } from "../_app";
import { fetchData } from "../../api/booking-service";
import { IReservation } from "../../api/booking-service/types";
import { SpinnerComponent } from "../../ui/spinner";

export async function getServerSideProps(context: any) {
  return {
    props: {
      id: context.query.id,
    },
  };
}

export interface ISummaryPage {
  id: string;
}

const Summary: NextPage<ISummaryPage> = ({ id }) => {
  const [BLIKCode, setBLIKCode] = useState("");
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const [reservation, setReservation] = useState({} as IReservation);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReservation = async () => {
      setIsLoading(true);
      const reservationRes = await fetchData(`/me/reservations/${id}` as any);

      debugger;

      setReservation(reservationRes.data);
      setIsLoading(false);
    };

    getReservation();
  }, [id]);

  if (isLoading) {
    <MasterLayoutComponent>
      <SpinnerComponent />
    </MasterLayoutComponent>;
  }

  return (
    <MasterLayoutComponent>
      <div className="pt-64 flex place-items-center flex-col w-3/6 mx-auto">
        {!isVerified && (
          <>
            <div className="text-lg underline">BLIK payment</div>
            <form
              className=""
              onSubmit={(e) => {
                e.preventDefault();
                if (BLIKCode !== "111111") {
                  setError(true);
                } else {
                  fetchData(
                    `/me/reservations/${reservation.id}/payment` as any,
                    {
                      payment: {
                        value: reservation.totalCost.value,
                        currency: reservation.totalCost.currency,
                      },
                    },
                    "",
                    "POST"
                  );
                  setError(false);
                  setIsVerified(true);
                }
              }}
            >
              <label
                className="block mb-1 text-sm text-gray-600 mb-4"
                htmlFor="blik"
              >
                Enter the blik code just received from the bank
                <p className="max-w-md mx-auto mt-4 text-left text-gray-500 text-center">
                  <div>Enter bellow code to pass process:</div>
                  <div className="italic ">11111111</div>
                </p>
              </label>

              <input
                required
                className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 mb-4"
                maxLength={6}
                type="text"
                id="blik"
                onChange={(e) => {
                  setBLIKCode(e.target.value);
                }}
              />
              <button
                className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                type="submit"
              >
                Confirm
              </button>
              {error ? (
                <div className="col-span-6 flex">
                  <div
                    className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
                    role="alert"
                  >
                    <strong className="text-sm font-medium">
                      Inserted BLIK code is invalid. Please try again
                    </strong>
                  </div>
                </div>
              ) : null}
            </form>
          </>
        )}

        {isVerified && (
          <>
            <div className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 stroke-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 12.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 p-8 pt-4 text-center">
              Your reservation action was successfull :) To check your
              reservation go to Reservation Tab
            </p>
            <ButtonComponent
              label={"Go back to reservation site"}
              btnClickEvent={() => {
                router.push(SiteRoutes.RESERVE_ROOMS);
              }}
            ></ButtonComponent>
          </>
        )}
      </div>
    </MasterLayoutComponent>
  );
};

export default Summary;
