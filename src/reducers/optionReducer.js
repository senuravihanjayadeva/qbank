import { ACTION_TYPES } from "../actions/OptionActions";

const initialState = {
  optionList: [],
  newOption: "",
  deletedOption: "",
};

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        optionList: [...action.payload],
      };
    case ACTION_TYPES.CREATE_OPTION:
      return {
        ...state,
        optionList: [...state.optionList, action.payload],
        newOption: action.payload,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        optionList: state.optionList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE_OPTION:
      return {
        ...state,
        optionList: state.optionList.filter((x) => x.id !== action.payload.id),
        deletedOption: action.payload.id,
      };
    default:
      return state;
  }
};
