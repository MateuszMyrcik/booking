export const TableComponent: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="sticky left-0 p-4 text-left bg-white">
              <label className="sr-only" htmlFor="row_all">
                Select All
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_all"
              />
            </th>
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
              <div className="flex items-center">Order Number</div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          <tr>
            <td className="sticky left-0 p-4 bg-white">
              <label className="sr-only" htmlFor="row_1">
                Row 1
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_1"
              />
            </td>
            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
              John Doe
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              john.doe@email.com
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                Cancelled
              </strong>
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              (+44) 2198 450650
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              SHOP-1268-8910
            </td>
          </tr>

          <tr>
            <td className="sticky left-0 p-4 bg-white">
              <label className="sr-only" htmlFor="row_2">
                Row 2
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_2"
              />
            </td>
            <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              jane.doe@email.com
            </td>
            <td className="p-4 whitespace-nowrap">
              <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                Paid
              </strong>
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              (+44) 1928 450650
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              SHOP-4235-1526
            </td>
          </tr>

          <tr>
            <td className="sticky left-0 p-4 bg-white">
              <label className="sr-only" htmlFor="row_3">
                Row 3
              </label>
              <input
                className="w-5 h-5 border-gray-200 rounded"
                type="checkbox"
                id="row_3"
              />
            </td>
            <td className="p-4 font-medium whitespace-nowrap">Gary Barlow</td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              gary.barlow@email.com
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              <strong className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                Partially Refunded
              </strong>
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              (+44) 2819 450650
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
              SHOP-1573-2468
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
