import { createAction, createAsyncAction } from "typesafe-actions";
import { getUser } from "./../../db/db";
import { User } from "UserModule";
import { userRootId } from "./../../constants";

export const getUserAssync = createAsyncAction(
  "DB/GET_USER_REQUEST",
  "DB/GET_USER_SUCCESS",
  "DB/GET_USER_FAILURE"
)<undefined, User>();
