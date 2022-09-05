import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { CardsComponent } from "../../ui/cards";
import { FiltersPanelComponent } from "../../ui/filters-panel";

import { MasterLayoutComponent } from "../../ui/master-layout";

const ReserveRoomsPage: NextPage = () => {
  const [rooms, setRooms] = useState([]);
  const [activeFilter, setActiveFilter] = useState({
    noPeople: "",
    bathroomType: "",
    isCoffeeMachine: "",
    isTv: "",
    isRestArea: "",
    isBalcony: "",
  });

  const handleFiltering = (event: FormEvent<HTMLFormElement>) => {
    const { balcony, tv, coffeeMachine, restArea, bath, shower, peopleNumber } =
      event.target as any;
    let tempState = { ...activeFilter };

    // Set Checkboxes
    [balcony, tv, coffeeMachine, restArea].forEach((item) => {
      if (item.checked) {
        tempState = { ...tempState, [item.name]: true };
      } else {
        tempState = { ...tempState, [item.name]: "" };
      }
    });

    // Set Radio buttons
    if (bath.checked) {
      tempState = { ...tempState, bathroomType: "BATH" };
    } else if (shower.checked) {
      tempState = { ...tempState, bathroomType: "SHOWER" };
    }

    // Set Number
    if (peopleNumber.value) {
      tempState = { ...tempState, noPeople: peopleNumber.value };
    }

    setActiveFilter({ ...tempState });
    filterData(tempState);
    [];
  };

  const filterData = async (params: any) => {
    const filteredRooms = await fetchData("/rooms", "", params);
    console.log(filteredRooms);

    setRooms(filteredRooms.data);
  };

  const handleResetFiltering = () => {
    setActiveFilter({
      noPeople: "",
      bathroomType: "",
      isCoffeeMachine: "",
      isTv: "",
      isRestArea: "",
      isBalcony: "",
    });
  };

  useEffect(() => {
    const getRooms = async () => {
      const rooms = await fetchData("/rooms");
      setRooms(rooms.data);
    };

    getRooms();
  }, []);
  return (
    <MasterLayoutComponent>
      <div className="flex items-stretch mt-4">
        <aside className="w-72">
          <FiltersPanelComponent
            handleResetFiltering={handleResetFiltering}
            handleFiltering={handleFiltering}
          />
        </aside>
        <section className="flex-1">
          {rooms.map((room, index) => (
            <CardsComponent room={room} key={index} />
          ))}
        </section>
      </div>
    </MasterLayoutComponent>
  );
};

export default ReserveRoomsPage;
