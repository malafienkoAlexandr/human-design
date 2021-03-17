import { User } from "UserModule";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import cuid from "cuid";
import { createUser } from "./actions";

export const user = createReducer({
  id: cuid(),
  name: "",
  birthDate: "",
  birthTime: "",
  utc: 0,
  city: "",
  country: "",
} as User);

const userReducer = combineReducers({
  user,
});

export default userReducer;
export type UserState = ReturnType<typeof userReducer>;
