import api from "../Api/Api";
import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAIL } from "./Types";

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: GET_USERS_START,
  });
  try {
    const response = await api.get();
    if (response) {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response.data.users,
      });
      // console.log(response);
    }
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: err.response.data.message,
    });
  }
};
