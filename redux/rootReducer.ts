import { combineReducers } from "@reduxjs/toolkit";
import userNameSlice from "./slices/usernameSlice";

const rootReducer = combineReducers({
  username: userNameSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
