import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";

import { FormDialogComponent, IFormInput } from "../../ui/form-dialog";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { RoomsTable } from "../../ui/rooms-table";

const FormInputs: any = [
  { id: "roomNo", label: "Room number", type: "number" },
  { id: "noPeople", label: "People number", type: "number" },
  { id: "description", label: "Description", type: "text" },
  { id: "image", label: "Image", type: "url" },
  { id: "pricePerNight", label: "Price per night", type: "number" },

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

  const saveRoom = async (roomData: any) => {
    console.log("save", roomData);
    const mappedData = { ...roomData, images: [{ uri: roomData.image }] };

    await fetchData(
      "/rooms",
      {
        roomNo: "011",
        noPeople: 3,
        description: "First test room",
        roomType: "STANDARD",
        pricePerNight: {
          value: 100,
          currency: "PLN",
        },
        isBalcony: true,
        isOutstandingView: true,
        isTv: true,
        bathroomType: "SHOWER",
        isCoffeeMachine: true,
        isRestArea: true,
        roomSize: {
          value: 30,
          unit: "m2",
        },
        images: [
          {
            roomNo: "2",
            uri: "https://media.timeout.com/images/105859033/image.jpg",
          },
        ],
        status: "ACTIVE",
      },
      "",
      "POST"
    ).then((e) => console.log("finish", e));
  };

  useEffect(() => {
    const storeReservations = async () => {
      const roomRes = await fetchData("/rooms");
      setRooms(roomRes.data);
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
          <RoomsTable data={rooms}></RoomsTable>
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default RoomsPage;
