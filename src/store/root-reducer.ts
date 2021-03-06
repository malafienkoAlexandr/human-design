import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import userReducer from "../features/user/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
});

export default rootReducer;
