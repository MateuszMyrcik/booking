import type { NextPage } from "next";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { IRoomData } from "../../api/booking-service/types";
import { ButtonComponent } from "../../ui/button";
import { MasterLayoutComponent } from "../../ui/master-layout";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { AppContext } from "../_app";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRangeComponent from "../../ui/date-range";
import { useRouter } from "next/router";
import { differenceInCalendarDays } from "date-fns";
import { AppActionType } from "../../state/reducers";
import { SpinnerComponent } from "../../ui/spinner";
import { Carousel } from "react-responsive-carousel";

export async function getServerSideProps(context: any) {
  return {
    props: {
      id: context.query.id,
    },
  };
}

export interface ICheckoutPage {
  id: string;
}

const Checkout: NextPage<ICheckoutPage> = ({ id }) => {
  const [room, setRoom] = useState({} as IRoomData);
  const { appState, appDispatch } = useContext(AppContext);
  const [roomUnavailibility, setRoomUnavailability] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [transactionErr, setTransactionErr] = useState("");
  const [totalPrize, setTotalPrize] = useState(0);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const getPrize = (roomPrize: number, start: string, end: string) => {
    return differenceInCalendarDays(new Date(start), new Date(end)) * roomPrize;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const reservation = await fetchData(
      "/me/reservations" as any,
      {
        roomNo: room.roomNo,
        noPeople: room.noPeople,
        dateRange: {
          from: dateRange[0],
          to: dateRange[1],
        },
      },
      "",
      "POST"
    );

    if (reservation.status === 400) {
      setTransactionErr(reservation.data.message);
    } else {
      setTransactionErr("");
      appDispatch({
        type: AppActionType.SET_RESERVATION,
        payload: {
          ...reservation.data,
        },
      });
      router.push(`${SiteRoutes.SUMMARY}/${reservation.data.id}`);
    }
  };

  useEffect(() => {
    const getRoomUnvailibity = async () => {
      const room = await fetchData(`/rooms/${id}` as any);

      setRoom(room.data);
      const unvailibity = await fetchData(
        `/rooms/${room.data.roomNo}/unavailability` as any
      );

      setRoomUnavailability(unvailibity.data);
      setIsLoading(false);
    };

    getRoomUnvailibity();
  }, [id]);

  return (
    <MasterLayoutComponent>
      <section>
        <div className="px-12 py-2">
          <div className="text-lg underline">Checkout</div>
          <p className="max-w-md text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>
        </div>

        <div className="relative mx-auto max-w-screen-2xl">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="py-4 bg-gray-50">
                <div className="max-w-lg px-4 mx-auto lg:px-8">
                  <div className="mt-12">
                    <div className="flow-root">
                      <div className="flex gap-8">
                        <ul className="my-4 divide-y divide-gray-200 mx-0">
                          <li className="flex items-center justify-between py-4">
                            <div className="flex items-start">
                              {/* <img
                              className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                              src={room.images[1].uri}
                              alt=""
                            /> */}

                              <div className="">
                                <p className="text-sm">{room.description}</p>

                                <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                  <div>
                                    <dt className="inline">Bathroom type:</dt>
                                    <dd className="ml-1 inline">
                                      {room.bathroomType}
                                    </dd>
                                  </div>

                                  <div>
                                    <dt className="inline">Is balcony:</dt>
                                    <dd className="inline">
                                      {room.isBalcony ? (
                                        <div className="ml-2 inline text-green-500">
                                          Yes
                                        </div>
                                      ) : (
                                        <div className="ml-2 inline text-red-500">
                                          No
                                        </div>
                                      )}
                                    </dd>
                                  </div>

                                  <div>
                                    <dt className="inline">
                                      Is coffee machine:
                                    </dt>
                                    <dd className="inline">
                                      {room.isCoffeeMachine ? (
                                        <div className="ml-2 inline text-green-500">
                                          Yes
                                        </div>
                                      ) : (
                                        <div className="ml-2 inline text-red-500">
                                          No
                                        </div>
                                      )}
                                    </dd>
                                  </div>

                                  <div>
                                    <dt className="inline">
                                      Is outstanding view:
                                    </dt>
                                    <dd className="inline">
                                      {room.isOutstandingView ? (
                                        <div className="ml-2 inline text-green-500">
                                          Yes
                                        </div>
                                      ) : (
                                        <div className="ml-2 inline text-red-500">
                                          No
                                        </div>
                                      )}
                                    </dd>
                                  </div>

                                  <div>
                                    <dt className="inline">Is rest area:</dt>
                                    <dd className="inline">
                                      {room.isRestArea ? (
                                        <div className="ml-2 inline text-green-500">
                                          Yes
                                        </div>
                                      ) : (
                                        <div className="ml-2 inline text-red-500">
                                          No
                                        </div>
                                      )}
                                    </dd>
                                  </div>

                                  <div>
                                    <dt className="inline">Is TV:</dt>
                                    <dd className="inline">
                                      {room.isTv ? (
                                        <div className="ml-2 inline text-green-500">
                                          Yes
                                        </div>
                                      ) : (
                                        <div className="ml-2 inline text-red-500">
                                          No
                                        </div>
                                      )}
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <p className="text-2xl font-medium tracking-tight">
                            ${room.pricePerNight.value}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Prize for the night
                          </p>
                          {totalPrize > 0 && (
                            <>
                              <p className="mt-2 text-2xl font-medium tracking-tight">
                                ${totalPrize}
                              </p>
                              <p className="mt-1 text-sm text-green-500">
                                Total prize
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div>
                        <Carousel>
                          {room.images.map((image, index) => (
                            <div key={index}>
                              <img src={image.uri} />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-4 bg-white md:py-24">
                {appState.user ? (
                  <div className="max-w-lg px-4 mx-auto lg:px-8">
                    <form
                      className="grid grid-cols-6 gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      <div className="col-span-6 flex">
                        {/* <DateRangeComponent onChange={setDateRange} /> */}

                        <DateRangeComponent
                          unavailabilityRange={roomUnavailibility}
                          onChange={(newValue) => {
                            setDateRange(newValue);

                            setTotalPrize(
                              getPrize(
                                room.pricePerNight.value,
                                newValue[1],
                                newValue[0]
                              )
                            );
                          }}
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          className="block mb-1 text-sm text-gray-600"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>

                        <input
                          required
                          className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                          type="text"
                          id="frst_name"
                          defaultValue={appState.user.username}
                        />
                      </div>

                      <div className="col-span-3">
                        <label
                          className="block mb-1 text-sm text-gray-600"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>

                        <input
                          required
                          className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                          type="text"
                          id="last_name"
                          defaultValue={appState.user.surname}
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          className="block mb-1 text-sm text-gray-600"
                          htmlFor="email"
                        >
                          Email
                        </label>

                        <input
                          required
                          className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                          type="email"
                          id="email"
                          defaultValue={appState.user.email}
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          className="block mb-1 text-sm text-gray-600"
                          htmlFor="phone"
                        >
                          Phone
                        </label>

                        <input
                          required
                          className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                          type="tel"
                          id="phone"
                          defaultValue={appState.user.phoneNumber}
                        />
                      </div>

                      <div className="col-span-6">
                        <button
                          className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                          type="submit"
                        >
                          Pay Now
                        </button>
                      </div>
                    </form>
                    {transactionErr ? (
                      <div className="col-span-6 flex">
                        <div
                          className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
                          role="alert"
                        >
                          <strong className="text-sm font-medium">
                            {transactionErr}
                          </strong>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="text-center mt-24 text-lg h-full">
                    <div className="mb-2">You need to be logged in!</div>
                    <ButtonComponent
                      label="Sing in"
                      btnClickEvent={GoTo(SiteRoutes.LOGIN)}
                    ></ButtonComponent>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      ;
    </MasterLayoutComponent>
  );
};

export default Checkout;
