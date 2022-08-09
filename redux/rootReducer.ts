import { combineReducers } from "@reduxjs/toolkit";
import chatSlice from "./slices/chatSlice";
import userNameSlice from "./slices/usernameSlice";

const rootReducer = combineReducers({
  username: userNameSlice,
  chats: chatSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
