import { combineReducers } from "redux";
import { User } from "../../../models/user";
import { LOAD_USER } from "./types";

const user: User = {
  id: "qwert",
  name: "Александр",
  birthDate: "",
  birthTime: "",
  utc: 3,
  city: "",
  country: "",
};

export type HomeState = {
  user: User;
  friends: User[];
};

const initionHomeState: HomeState = {
  user: user,
  friends: [],
};

export default combineReducers<HomeState, >(state = initionHomeState, action) => {
  switch action.type {
    case LOAD_USER:
      return state
    default:
      return state
  }
};
