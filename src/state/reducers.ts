export enum AppActionType {
  CHANGE_USER = "CHANGE_USER",
}
export interface IAction {
  type: AppActionType;
  // payload: FilterType | IPairsEndpointRes;
  payload?: any;
}

export interface IState {
  isUserLogged: boolean;
}

export const AppReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case AppActionType.CHANGE_USER:
      return changeUser(state, action.payload);

    default:
      return state;
  }
};

export const changeUser = (state: IState, isUserLogged: boolean): IState => {
  return {
    ...state,
    isUserLogged,
  };
};
