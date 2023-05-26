import { combineReducers } from "redux";

import getUsers from "./getUsers";

const rootReducer = combineReducers({
  getUsers,
});

export default rootReducer;
