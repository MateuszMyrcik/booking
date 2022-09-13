import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { ReservationsTableComponent } from "../../ui/reservations-table";
import { SpinnerComponent } from "../../ui/spinner";

const ReservationsPage: NextPage = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateReservations = async (
    id: number,
    status: "ACCEPTED" | "REJECTED"
  ) => {
    setIsLoading(true);
    await fetchData(
      `/reservations/${id}` as any,
      {
        status: status,
      },
      "",
      "PATCH"
    );
    const reservationsRes = await fetchData("/reservations");
    setReservations(reservationsRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    const storeReservations = async () => {
      const reservationsRes = await fetchData("/reservations");
      setReservations(reservationsRes.data);
    };

    storeReservations();
  }, []);
  return (
    <MasterLayoutComponent>
      <div className="p-4">
        <div className=" text-lg underline">Reservations</div>
        <p className="max-w-md text-sm text-gray-500">
          Here update status of your reservations and decline them
        </p>
        <div className="">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <ReservationsTableComponent
              onApproveClick={(id) => updateReservations(id, "ACCEPTED")}
              onDeclineClick={(id) => updateReservations(id, "REJECTED")}
              data={reservations}
            />
          )}
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default ReservationsPage;
