import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dependencies } from "@root/modules/store/dependencies";
import { AppDispatch, AppState } from "@root/modules/store/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: Dependencies;
}>();
