import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { IUserData } from "../../api/booking-service/types";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { SpinnerComponent } from "../../ui/spinner";
import { UsersTableComponent } from "../../ui/users-table";

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: Event, user: IUserData) => {
    event.preventDefault();
    setIsLoading(true);
    const role = (event as any).target.role[
      (event as any).target.role.selectedIndex
    ].value;

    await fetchData(
      `/users/${user.username}` as any,
      { roles: [role] },
      "",
      "PATCH"
    );
    const users = await fetchData("/users");
    setUsers(users.data);
    setIsLoading(false);
  };

  const onDelete = async (user: IUserData) => {
    setIsLoading(true);

    await fetchData(`/users/${user.username}` as any, {}, "", "DELETE");
    const users = await fetchData("/users");
    setUsers(users.data);
    setIsLoading(false);
  };

  useEffect(() => {
    const storeUsers = async () => {
      setIsLoading(true);
      const users = await fetchData("/users");
      setUsers(users.data);
      setIsLoading(false);
    };

    storeUsers();
  }, []);

  return (
    <MasterLayoutComponent>
      <div className="p-4">
        <div className=" text-lg underline">Users</div>
        <p className="max-w-md text-sm text-gray-500">
          Here update status of your reservations and decline them
        </p>
        <div className="">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <UsersTableComponent
              onSubmit={onSubmit}
              onDelete={onDelete}
              users={users as IUserData[]}
            />
          )}
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default UsersPage;
