import { User } from "UserModule";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { getUserAssync } from "./actions";

export const user = createReducer({} as User).handleAction(
  getUserAssync.success,
  (state, action) => action.payload
);

const userReducer = combineReducers({
  user,
});

export default userReducer;
export type UserState = ReturnType<typeof userReducer>;
