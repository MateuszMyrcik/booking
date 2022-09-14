import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { fetchData } from "../../api/booking-service";
import { IRoom } from "../../api/booking-service/types";
import { ButtonComponent } from "../../ui/button";
import { CheckboxComponent } from "../../ui/form-fields/checbox";
import { InputComponent } from "../../ui/form-fields/input";
import { SelectComponent } from "../../ui/form-fields/select";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { GoTo, SiteRoutes } from "../../utils/goto";

export async function getServerSideProps(context: any) {
  const rooms = await fetchData(`/rooms/${context.query.id}` as any);

  return {
    props: {
      room: rooms.data,
    },
  };
}

export interface IRoomPage {
  room: IRoom;
}

export type FormValues = IRoom;

const RoomPage: NextPage<IRoomPage> = ({ room: roomRes }) => {
  const router = useRouter();
  const defaultValues = {
    ...roomRes,
    image: (roomRes.images as any)[0].uri,
    pricePerNight: roomRes.pricePerNight.value as any,
  };
  const [room, setRoom] = useState({});
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit = async (room: IRoom) => {
    const mappedData: IRoom = {
      ...room,
      images: [...(roomRes?.images as any), { uri: (room as any).image }],
      pricePerNight: {
        value: room.pricePerNight as any,
        currency: "EUR",
      },
    };

    const result = await fetchData(
      `/rooms/${roomRes.roomNo}` as any,
      mappedData,
      "",
      "PUT"
    );

    router.push(SiteRoutes.ROOMS);
  };

  return (
    <MasterLayoutComponent>
      <section className="">
        <div className="px-12 py-2">
          <div className="text-lg underline">Checkout</div>
          <p className="max-w-md text-sm text-gray-500">
            Here you can edit details of room /{roomRes.roomNo}/
          </p>
        </div>
        <div className="px-12 py-4 bg-slate-100">
          <form
            onSubmit={handleSubmit((data) => {
              setRoom(data);
              onSubmit(data);
            })}
            className="form"
          >
            <div className="flex justify-center gap-8 p-8">
              {/* <InputComponent
                control={control}
                name="roomNo"
                label="Room Number"
                type="number"
              ></InputComponent> */}
              <InputComponent
                control={control}
                name="noPeople"
                label="People number"
                type="number"
              ></InputComponent>
              <InputComponent
                control={control}
                name="description"
                label="Description"
                type="text"
              ></InputComponent>
              <InputComponent
                control={control}
                name="image"
                label="Image url"
                type="url"
              ></InputComponent>
              <InputComponent
                control={control}
                name="pricePerNight"
                label="Price per night"
                type="number"
              ></InputComponent>
            </div>

            <div className="flex justify-center gap-8 p-8">
              <CheckboxComponent
                control={control}
                name="isBalcony"
                label="Is balcony"
              ></CheckboxComponent>
              <CheckboxComponent
                control={control}
                name="isOutstandingView"
                label="Is outstanding view"
              ></CheckboxComponent>
              <CheckboxComponent
                control={control}
                name="isTv"
                label="Is Tv"
              ></CheckboxComponent>
              <CheckboxComponent
                control={control}
                name="isCoffeeMachine"
                label="Is coffee machine"
              ></CheckboxComponent>
              <CheckboxComponent
                control={control}
                name="isRestArea"
                label="Is rest area"
              ></CheckboxComponent>
            </div>

            <div className="flex justify-center gap-8 p-8">
              <SelectComponent
                control={control}
                label="Room type"
                name="roomType"
                options={[{ label: "STANDARD" }, { label: "PREMIUM" }]}
              ></SelectComponent>
              <SelectComponent
                control={control}
                label="Bathroom Type"
                name="bathroomType"
                options={[{ label: "SHOWER" }, { label: "BATH" }]}
              ></SelectComponent>
              <SelectComponent
                control={control}
                label="STATUS"
                name="status"
                options={[{ label: "ACTIVE" }, { label: "INACTIVE" }]}
              ></SelectComponent>
            </div>

            <div className="flex justify-center gap-16">
              <ButtonComponent
                label="Cancel"
                secondType={true}
                btnClickEvent={GoTo(SiteRoutes.ROOMS)}
              ></ButtonComponent>
              <input
                className="px-5 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-300"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </section>
    </MasterLayoutComponent>
  );
};

export default RoomPage;
