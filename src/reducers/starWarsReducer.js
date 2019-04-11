import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        characters: [...state.characters, ...action.payload],
        isFetching: false
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Oh no, something went wrong"
      };
    default:
      return state;
  }
};
