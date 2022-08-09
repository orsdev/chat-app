import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export type MessageState = {
  from: string,
  message: string
  date: Date
}

interface Props {
  messages: MessageState[]
}


const chatSlice = createSlice({
  name: "user",
  initialState: {
    messages: []
  } as Props,
  reducers: {
    saveMessage: (
      state: Props,
      action: PayloadAction<MessageState>
    ) => {
      state.messages = state.messages.concat(action.payload)
    }
  },
  extraReducers: {

  },
});

export const {
  saveMessage
} = chatSlice.actions;
export default chatSlice.reducer;
