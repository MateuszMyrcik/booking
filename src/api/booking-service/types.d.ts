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
  authorities: string;
  phoneNumber: string;
  photoURI: string;
}
