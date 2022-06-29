import type { NextPage } from "next";
import { FormEvent, useContext, useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { IRoomData, IUserData } from "../../api/booking-service/types";
import { ButtonComponent } from "../../ui/button";
import { MasterLayoutComponent } from "../../ui/master-layout";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { AppContext } from "../_app";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRangeComponent from "../../ui/date-range";

export async function getServerSideProps(context) {
  const rooms = await fetchData(`/rooms/${context.query.id}`);

  return {
    props: {
      room: rooms.data,
    },
  };
}

export interface ICheckoutPage {
  room: IRoomData;
}

const Checkout: NextPage<ICheckoutPage> = ({ room }) => {
  const { appState, appDispatch } = useContext(AppContext);
  const [dateRange, setDateRange] = useState([]);
  const [transactionErr, setTransactionErr] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const reservation = await fetchData(
      "/reservations",
      {
        roomNo: room.roomNo,
        username: appState.user?.username,
        noPeople: 4,
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
      
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 bg-gray-50 md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">
                    ${room.pricePerNight.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Prize for the night
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                            src={room.images[1].uri}
                            alt=""
                          />

                          <div className="ml-4">
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
                                <dt className="inline">Is coffee machine:</dt>
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
                                <dt className="inline">Is outstanding view:</dt>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12 bg-white md:py-24">
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
                      <DateRangeComponent onChange={setDateRange} />
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
        </div>
      </section>
      ;
    </MasterLayoutComponent>
  );
};

export default Checkout;
