import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "@root/modules/store/app-state";
import { Dependencies } from "@root/modules/store/dependencies";
import { AppDispatch } from "@root/modules/store/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: Dependencies;
}>();
