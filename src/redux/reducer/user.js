import { handleActions } from "redux-actions";
import * as constants from "../constants/user";

const defaultState = {
  user: "",
};

const reducer = handleActions({}, defaultState);

export default reducer;
