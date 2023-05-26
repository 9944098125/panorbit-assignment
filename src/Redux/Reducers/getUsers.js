import {
  GET_USERS_START,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "../Actions/Types";

const initialState = {
  loading: false,
  users: [],
  failMessage: "",
};

export default function getUsers(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      localStorage.setItem("users", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    default:
      return state;
  }
}
