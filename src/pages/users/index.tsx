import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";
import { IUserData } from "../../api/booking-service/types";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { UsersTableComponent } from "../../ui/users-table";

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storeUsers = async () => {
      const users = await fetchData("/users");
      setUsers(users.data);
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
          <UsersTableComponent users={users as IUserData[]} />
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default UsersPage;
