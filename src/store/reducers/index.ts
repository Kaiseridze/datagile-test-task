import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
export const rootReducer = combineReducers({
  counterReducer
})

export type RootState = ReturnType<typeof rootReducer>;