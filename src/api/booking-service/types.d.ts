import { PERMISSION_ROLE } from "../../utils/getUserLevel";

export interface PricePerNight {
  value: number;
  currency: string;
}

export interface RoomSize {
  value: number;
  unit: string;
}

export interface Image {
  id: number;
  roomNo: string;
  uri: string;
}

export interface IRoomData {
  roomNo: string;
  noPeople: number;
  description: string;
  roomType: string;
  pricePerNight: PricePerNight;
  isBalcony: boolean;
  isOutstandingView: boolean;
  isTv: boolean;
  bathroomType: string;
  isCoffeeMachine: boolean;
  isRestArea: boolean;
  roomSize: RoomSize;
  images: Image[];
  status: string;
  version: number;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IUserData {
  username: string;
  email: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  authorities: PERMISSION_ROLE;
  phoneNumber: string;
  photoURI: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface TotalCost {
  value: number;
  currency: string;
}

export interface IReservation {
  id: number;
  roomNo: string;
  username: string;
  noPeople: number;
  breakfastIncluded: boolean;
  dinnerIncluded: boolean;
  supperIncluded: boolean;
  dateRange: DateRange;
  parkingIncluded: boolean;
  animalsIncluded: boolean;
  totalCost: TotalCost;
  status: "ACCEPTED" | "PAID" | "PENDING" | "REJECTED";
}

export interface IRoom {
  roomNo: string;
  noPeople: number;
  description: string;
  roomType: string;
  pricePerNight: PricePerNight;
  isBalcony: boolean;
  isOutstandingView: boolean;
  isTv: boolean;
  bathroomType: string;
  isCoffeeMachine: boolean;
  isRestArea: boolean;
  roomSize: RoomSize;
  images?: ImagesEntity[] | null;
  status: string;
  version: number;
  createdAt: string;
  modifiedAt: string;
}
export interface PricePerNight {
  value: number;
  currency: string;
}
export interface RoomSize {
  value: number;
  unit: string;
}
export interface ImagesEntity {
  uri: string;
}

// {
//     "roomNo": "2",
//     "noPeople": 3,
//     "description": "First test room",
//     "roomType": "STANDARD",
//     "pricePerNight": {
//         "value": 100,
//         "currency": "PLN"
//     },
//     "isBalcony": true,
//     "isOutstandingView": true,
//     "isTv": true,
//     "bathroomType": "SHOWER",
//     "isCoffeeMachine": true,
//     "isRestArea": true,
//     "roomSize": {
//         "value": 30,
//         "unit": "m2"
//     },
//     "images": [
//         {
//             "roomNo": "2",
//             "uri": "https://media.timeout.com/images/105859033/image.jpg"
//         }
//     ],
//     "status": "ACTIVE"
// }
