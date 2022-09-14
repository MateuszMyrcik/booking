import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { PermissionLevel } from "../../configs/navigation";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { ReservationsTableComponent } from "../../ui/reservations-table";
import { SpinnerComponent } from "../../ui/spinner";
import { AppContext } from "../_app";

const ReservationsPage: NextPage = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { appState } = useContext(AppContext);

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
    await storeReservations();
    setIsLoading(false);
  };

  const storeReservations = async () => {
    let reservationsRes;
    if (
      appState.userLevel === PermissionLevel.ADMIN ||
      appState.userLevel === PermissionLevel.RECEPTIONIST
    ) {
      reservationsRes = await fetchData("/reservations" as any);
    } else {
      reservationsRes = await fetchData("/me/reservations" as any);
    }
    setReservations(reservationsRes.data);
  };

  useEffect(() => {
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
