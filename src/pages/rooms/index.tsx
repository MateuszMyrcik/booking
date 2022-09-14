import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { IRoom } from "../../api/booking-service/types";

import { FormDialogComponent, IFormInput } from "../../ui/form-dialog";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { RoomsTable } from "../../ui/rooms-table";
import { SpinnerComponent } from "../../ui/spinner";

const FormInputs: any = [
  { id: "roomNo", label: "Room number", type: "number" },
  { id: "noPeople", label: "People number", type: "number" },
  { id: "description", label: "Description", type: "text" },
  { id: "image", label: "Image", type: "url" },
  { id: "pricePerNight", label: "Price per night", type: "number" },
  { id: "roomSize", label: "Rooms size (m2)", type: "number" },

  { id: "isBalcony", label: "Is balcony", type: "checkbox" },
  { id: "isOutstandingView", label: "Is out standing view", type: "checkbox" },
  { id: "isTv", label: "Is tv", type: "checkbox" },
  { id: "isCoffeeMachine", label: "Is coffee machine", type: "checkbox" },
  { id: "isRestArea", label: "Is rest area", type: "checkbox" },

  {
    id: "roomType",
    label: "Room type",
    type: "select",
    defaultValue: "STANDARD",
    options: [{ label: "PREMIUM" }, { label: "STANDARD" }],
  },
  {
    id: "bathroomType",
    label: "Bathroom Type",
    type: "select",
    defaultValue: "SHOWER",
    options: [{ label: "SHOWER" }, { label: "BATH" }],
  },
];

const RoomsPage: NextPage = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const saveRoom = async (roomData: any) => {
    const mappedData: IRoom = {
      ...roomData,
      images: [{ uri: (roomData as any).image }],
      pricePerNight: {
        value: Number(roomData.pricePerNight as any),
        currency: "EUR",
      },
      roomSize: {
        unit: "m2",
        value: Number(roomData.roomSize),
      },
      noPeople: Number(roomData.noPeople),
      status: "ACTIVE",
    };

    await fetchData("/rooms", mappedData, "", "POST");

    await fetchRooms();
  };

  const fetchRooms = async () => {
    const roomRes = await fetchData("/rooms", {}, { pageSize: 100 });

    setRooms(roomRes.data);
  };

  const onDelete = async (id: string) => {
    setIsLoading(true);
    await fetchData(`/rooms/${id}` as any, {}, "", "DELETE");
    await fetchRooms();
    setIsLoading(false);
  };

  useEffect(() => {
    const storeReservations = async () => {
      setIsLoading(true);
      await fetchRooms();
      setIsLoading(false);
    };

    storeReservations();
  }, []);

  return (
    <MasterLayoutComponent>
      <div className="p-4">
        <div className=" text-lg underline">Rooms</div>
        <p className="max-w-md text-sm text-gray-500">
          Here you can update data info or delete room completely
        </p>
        <div className="flex justify-between pt-4">
          <FormDialogComponent
            btnLabel="Add room"
            contentText="Specify all room details"
            title="Room"
            formInputs={FormInputs}
            onFormSubmit={saveRoom}
          >
            <></>
          </FormDialogComponent>
        </div>

        <div className="">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <RoomsTable data={rooms} onDelete={onDelete}></RoomsTable>
          )}
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default RoomsPage;
