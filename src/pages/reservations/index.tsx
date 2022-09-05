import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { ReservationsTableComponent } from "../../ui/reservations-table";

const ReservationsPage: NextPage = () => {
  const [reservations, setReservations] = useState([]);

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>
        <div className="">
          <ReservationsTableComponent data={reservations} />
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default ReservationsPage;
