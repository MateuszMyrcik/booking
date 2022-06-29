/* eslint-disable @next/next/no-img-element */
import { IUserData } from "../../api/booking-service/types";

interface ITableComponent {
  users: IUserData[];
}

export const TableComponent: React.FC<ITableComponent> = ({ users }) => {
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
              <div className="flex items-center">Status</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Phone Number</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Date of birth</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Update</div>
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
                <button className="text-gray-500 underline">Update</button>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className="text-gray-500 underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
