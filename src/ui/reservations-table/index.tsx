/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { IReservation, IUserData } from "../../api/booking-service/types";
import { PermissionLevel } from "../../configs/navigation";
import { AppContext } from "../../pages/_app";

interface ITableComponent {
  data: IReservation[];
  onDeclineClick: (id: number) => void;
  onApproveClick: (id: number) => void;
}

export const ReservationsTableComponent: React.FC<ITableComponent> = ({
  data,
  onDeclineClick,
  onApproveClick,
}) => {
  const { appState } = useContext(AppContext);

  const getStatusColor = (status: IReservation["status"]) => {
    switch (status) {
      case "ACCEPTED":
        return "bg-green-100 text-green-700";
      case "PAID":
      case "PENDING":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

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
              <div className="flex items-center">Reservation ID</div>
            </th>
            {appState.userLevel >= PermissionLevel.RECEPTIONIST && (
              <>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">Update</div>
                </th>
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">Delete</div>
                </th>
              </>
            )}
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
                  className={`${getStatusColor(
                    reservation.status
                  )} px-3 py-1.5 rounded text-xs font-medium
                  `}
                >
                  {reservation.status}
                </strong>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                {reservation.id}
              </td>
              {appState.userLevel >= PermissionLevel.RECEPTIONIST && (
                <>
                  <td className="p-4 text-gray-700 whitespace-nowrap hover:text-gray-200">
                    <button
                      className="text-gray-500 underline hover:text-blue-500 disabled:text-red-300 disabled:no-underline disabled:cursor-not-allowed"
                      onClick={() => onApproveClick(reservation.id)}
                      disabled={reservation.status !== "PAID"}
                    >
                      Approve
                    </button>
                  </td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">
                    <button
                      className="text-gray-500 underline hover:text-blue-500"
                      onClick={() => onDeclineClick(reservation.id)}
                    >
                      Decline
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
