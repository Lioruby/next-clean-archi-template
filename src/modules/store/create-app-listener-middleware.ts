import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { Dependencies } from "./dependencies";

import { AppDispatch } from "./store";
import { AppState } from "@root/modules/store/app-state";

export const createAppListenerMiddleware = (dependencies?: Dependencies) => {
  const listenerMiddleware = createListenerMiddleware<
    AppState,
    AppDispatch,
    Dependencies
  >({
    extra: dependencies,
  });

  return {
    middleware: listenerMiddleware.middleware,
    startAppListening: listenerMiddleware.startListening as TypedStartListening<
      AppState,
      AppDispatch,
      Dependencies
    >,
  };
};
