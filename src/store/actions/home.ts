import { User } from "../../models/user";
import { LOAD_USER } from "../reducers/home/types";

const user: User = {
  id: "qwert",
  name: "Александр",
  birthDate: "",
  birthTime: "",
  utc: 3,
  city: "",
  country: "",
};

export const loadUser = () => {
  return {
    type: LOAD_USER,
    payload: user,
  };
};
