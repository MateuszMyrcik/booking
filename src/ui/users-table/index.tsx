/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchData } from "../../api/booking-service";
import { IUserData } from "../../api/booking-service/types";
import { SelectComponent } from "../form-fields/select";

interface ITableComponent {
  users: IUserData[];
  onSubmit: (event: Event, user: IUserData) => void;
  onDelete: (user: IUserData) => void;
  columns?: {
    headingName: string;
  }[];
  rows?: {
    image?: string;
    textContent: string;
    contentWrapper?: Element;
    onClick?: VoidFunction;
  }[];
}

interface FormValues {
  role: "ROLE_ADMIN" | "ROLE_RECEPTIONIST" | "ROLE_USER";
}

export const UsersTableComponent: React.FC<ITableComponent> = ({
  users,
  onSubmit,
  onDelete,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const onSubmit = async (event: Event, user: IUserData) => {
  //   event.preventDefault();
  //   const role = (event as any).target.role[
  //     (event as any).target.role.selectedIndex
  //   ].value;

  //   await fetchData(
  //     `/users/${user.username}` as any,
  //     { roles: [role] },
  //     "",
  //     "POST"
  //   );
  // };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Name</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Email Address</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Role</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Phone Number</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Date of birth</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Set Role</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Delete</div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="p-4 font-medium text-gray-900 whitespace-nowrap flex content-center items-center">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={user.photoURI}
                  alt={user.username}
                />
                {user.name} {user.surname}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {user.email}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <strong
                  className={`bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium ${
                    user.authorities === "ROLE_ADMIN"
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  {user.authorities}
                </strong>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {user.phoneNumber}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {user.dateOfBirth}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <form onSubmit={(e) => onSubmit(e as any, user)}>
                  <div className="flex items-center py-2 gap-3">
                    <select
                      className=" mt-1 text-sm border-2 border-gray-200 rounded"
                      defaultValue={user.authorities}
                      name="role"
                      required
                    >
                      {["ROLE_ADMIN", "ROLE_RECEPTIONIST", "ROLE_USER"].map(
                        (label) => (
                          <option key={label} value={label}>
                            {label}
                          </option>
                        )
                      )}
                    </select>
                    <button type="submit" className="text-gray-500 underline">
                      Update
                    </button>
                  </div>
                </form>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <button
                  className="text-gray-500 underline"
                  onClick={() => onDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
