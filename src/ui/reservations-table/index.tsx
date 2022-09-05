/* eslint-disable @next/next/no-img-element */
import { IReservation, IUserData } from "../../api/booking-service/types";

interface ITableComponent {
  data: IReservation[];
}

export const ReservationsTableComponent: React.FC<ITableComponent> = ({
  data,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Room Number</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Date range</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Total cost</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Status</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">People Number</div>
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
          {data.map((reservation, index) => (
            <tr key={index}>
              <td className="p-4 font-medium text-gray-900 whitespace-nowrap flex content-center items-center">
                {reservation.roomNo}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <>
                  {reservation.dateRange.from} - {reservation.dateRange.to}
                </>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {reservation.totalCost.value}
                {reservation.totalCost.currency}
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <strong
                  className={`bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium text-yellow-700 
                  `}
                >
                  {reservation.status}
                </strong>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {reservation.noPeople}
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
