import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/booking-service";

import { MasterLayoutComponent } from "../../ui/master-layout";
import { TableComponent } from "../../ui/table";

const AdminPanel: NextPage = () => {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>
        <div className="">
          <TableComponent users={users} />
        </div>
      </div>
    </MasterLayoutComponent>
  );
};

export default AdminPanel;
