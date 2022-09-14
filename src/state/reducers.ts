import { IReservation, IRoom, IRoomData } from "../api/booking-service/types";
import { PermissionLevel } from "../configs/navigation";

export enum AppActionType {
  SET_USER = "SET_USER",
  SET_USER_LEVEL = "SET_USER_LEVEL",
  SET_ROOM = "SET_ROOM",
  SET_RESERVATION = "SET_RESERVATION",
  SET_TOKEN = "SET_TOKEN",
}
export interface IAction {
  type: AppActionType;
  // payload: FilterType | IPairsEndpointRes;
  payload?: any;
}

export interface IState {
  userLevel: number;
  user?: {
    email: string;
    username: string;
    photo: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    phoneNumber: string;
  };
  room?: IRoomData;
  reservation?: IReservation;
  token?: string;
}

export const AppReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case AppActionType.SET_USER:
      return setUser(state, action.payload);
    case AppActionType.SET_USER_LEVEL:
      return setUserLevel(state, action.payload);
    case AppActionType.SET_ROOM:
      return setRoom(state, action.payload);
    case AppActionType.SET_RESERVATION:
      return setReservation(state, action.payload);
    case AppActionType.SET_TOKEN:
      return setToken(state, action.payload);
    default:
      return state;
  }
};

export const setUser = (state: IState, user: IState["user"]): IState => {
  return {
    ...state,
    user,
  };
};

export const setUserLevel = (
  state: IState,
  userLevel: IState["userLevel"]
): IState => {
  if (userLevel === PermissionLevel.GUEST) {
    localStorage.setItem("access_token", "");
  }

  return {
    ...state,
    userLevel,
  };
};

export const setRoom = (state: IState, room: IState["room"]): IState => {
  return {
    ...state,
    room,
  };
};

export const setToken = (state: IState, token: IState["token"]): IState => {
  return {
    ...state,
    token,
  };
};

export const setReservation = (
  state: IState,
  reservation: IState["reservation"]
): IState => {
  return {
    ...state,
    reservation,
  };
};
