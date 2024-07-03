import { useDispatch } from "react-redux";

import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { Dependencies } from "@root/modules/store/dependencies";

const reducers = combineReducers({});

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore["dispatch"];
export type AppGetState = AppStore["getState"];
export type AppThunkDispatch = ThunkDispatch<AppState, Dependencies, AnyAction>;
export type ThunkApi = {
  dispatch: AppThunkDispatch;
  state: AppState;
  extra: Dependencies;
};

export const createStore = (config: {
  initialState?: AppState;
  dependencies: Dependencies;
}) => {
  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware: any) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      });
    },
  });

  return store;
};

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<AppState, Dependencies, AnyAction>>();
