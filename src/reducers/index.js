import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
import { authReducer } from "./authReducer";
import { questionPoolReducer } from "./questionPoolReducer";
import { questionReducer } from "./questionReducer";
import { optionReducer } from "./optionReducer";
import { answerReducer } from "./answerReducer";

export const reducers = combineReducers({
  studentReducer,
  authReducer,
  questionPoolReducer,
  questionReducer,
  optionReducer,
  answerReducer,
});
