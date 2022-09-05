/* eslint-disable @next/next/no-img-element */
import { IRoom } from "../../api/booking-service/types";

interface ITableComponent {
  data: IRoom[];
}

export const RoomsTable: React.FC<ITableComponent> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto overflow-scroll w-full min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Room Number</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Number of people</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Description</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Room type</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Prize per night</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Room size</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Room status</div>
            </th>
            <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
              <div className="flex items-center">Version</div>
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
          {data.map((room, index) => (
            <tr key={index}>
              <td className="p-4 font-medium text-gray-900 ">{room.roomNo}</td>
              <td className="p-4 font-medium text-gray-900 ">
                {room.noPeople}
              </td>
              <td className="p-4 font-medium text-gray-900 ">
                {room.description}
              </td>
              <td className="p-4 font-medium text-gray-900 ">
                {room.roomType}
              </td>
              <td className="p-4 font-medium text-gray-900 ">
                {room.pricePerNight.value} {room.pricePerNight.currency}
              </td>
              <td className="p-4 font-medium text-gray-900 ">
                {room.roomSize.value} {room.roomSize.unit}
              </td>
              <td className="p-4 font-medium text-gray-900 ">{room.status}</td>
              <td className="p-4 font-medium text-gray-900 ">{room.version}</td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className="text-gray-500 underline">Update</button>
              </td>
              <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className="text-gray-500 underline">Delete</button>
              </td>

              {/* 
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
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};