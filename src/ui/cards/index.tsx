import { IRoomData } from "../../api/booking-service/types";
import { GoTo, SiteRoutes } from "../../utils/goto";
import { ButtonComponent } from "../button";

interface ICardsComponent {
  room: IRoomData;
}

export const CardsComponent: React.FC<ICardsComponent> = ({ room }) => {
  return (
    <div className="block p-4 rounded-lg shadow-sm shadow-indigo-100">
      <img
        alt="123 Wallaby Avenue, Park Road"
        src={room.images[1].uri}
        className="object-cover w-full h-56 rounded-md"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">
              {room.pricePerNight.value}$
            </dd>
          </div>

          <div>
            <dt className="sr-only">Description</dt>

            <dd className="font-medium">{room.description}</dd>
          </div>
        </dl>

        <dl className="flex items-center mt-6 space-x-8 text-xs">
          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="sm:ml-3 mt-1.5 sm:mt-0">
              <dt className="text-gray-500">Room version</dt>

              <dd className="font-medium">{room.roomType}</dd>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="sm:ml-3 mt-1.5 sm:mt-0">
              <dt className="text-gray-500">Bathroom type</dt>

              <dd className="font-medium capitalize">{room.bathroomType}</dd>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <div className="sm:ml-3 mt-1.5 sm:mt-0">
              <dt className="text-gray-500">Room size</dt>

              <dd className="font-medium">
                {room.roomSize.value}
                {room.roomSize.unit}
              </dd>
            </div>
          </div>
          <div className="sm:inline-flex sm:items-center sm:shrink-1">
            <ButtonComponent
              btnClickEvent={GoTo(SiteRoutes.CHECKOUT, `/${room.roomNo}`)}
              label={"Reserve"}
            />
          </div>
        </dl>
      </div>
    </div>
  );
};
