export enum AppActionType {
  SET_USER = "SET_USER",
  SET_USER_LEVEL = "SET_USER_LEVEL",
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
}

export const AppReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case AppActionType.SET_USER:
      return setUser(state, action.payload);
    case AppActionType.SET_USER_LEVEL:
      return setUserLevel(state, action.payload);
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
  return {
    ...state,
    userLevel,
  };
};
