import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
import { authReducer } from "./authReducer";
import { questionPoolReducer } from "./questionPoolReducer";

export const reducers = combineReducers({
  studentReducer,
  authReducer,
  questionPoolReducer,
});
