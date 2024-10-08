import { configureStore } from "@reduxjs/toolkit"
import userPollAnswerSlice from "./slices/userPollAnswerSlice"

const store = configureStore({
    reducer : {
        userPollAnswer : userPollAnswerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>

export default store