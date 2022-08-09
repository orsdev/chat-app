import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

type Props = {
  username: string | null
}

const userNameSlice = createSlice({
  name: "user",
  initialState: {
    username: null
  } as Props,
  reducers: {
    saveUserName: (
      state: Props,
      action: PayloadAction<string>
    ) => {
      state.username = action.payload;
    }
  },
  extraReducers: {

  },
});

export const {
  saveUserName
} = userNameSlice.actions;
export default userNameSlice.reducer;
