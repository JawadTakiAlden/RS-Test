import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  name: string;
  email: string;
  employment_status: string;
  teaching: string;
  date_of_birth: string;
  address: string;
  gender: string;
  age : string,
  solve: {
    questionId: number;
    answerId: number;
  }[];
}

const initialState : InitialState = {
  name: "",
  email: "",
  employment_status: "",
  teaching: "",
  date_of_birth: "",
  address: "",
  gender: "",
  age : "",
  solve: [],
};

const userPollAnswerSlice = createSlice({
  name: "userpollanswer",
  initialState,
  reducers: {
    UpdateData : (state , action : PayloadAction<{
        name : keyof InitialState,
        newValue : any
    }>) => {
        state[action.payload.name] = action.payload.newValue
    }
  },
});

export default userPollAnswerSlice.reducer;

export const {UpdateData} = userPollAnswerSlice.actions
