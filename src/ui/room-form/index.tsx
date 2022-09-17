import { useState } from "react";
import { useForm } from "react-hook-form";
import { IRoom, IRoomData } from "../../api/booking-service/types";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { ButtonComponent } from "../button";
import { CheckboxComponent } from "../form-fields/checbox";
import { InputComponent } from "../form-fields/input";
import { SelectComponent } from "../form-fields/select";

interface IRoomFormFeatureProps {
  roomDefaultData: IRoom;
  onSubmit: (newRoom: IRoom) => void;
}

type FormValues = {
  room: IRoom;
};
export const RoomFormFeature: React.FC<IRoomFormFeatureProps> = ({
  roomDefaultData,
  onSubmit,
}) => {
  const defaultValues = {
    ...roomDefaultData,
    image: (roomDefaultData.images as any)[0].uri,
    pricePerNight: roomDefaultData.pricePerNight.value as any,
  };

  const [room, setRoom] = useState({} as IRoom);
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  return (
    <>
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
    </>
  );
};
