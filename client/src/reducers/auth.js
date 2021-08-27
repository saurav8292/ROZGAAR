import { AUTH, LOGOUT, UPDATE } from "../constants/actionTypes";

let initialState = null;

if (localStorage.getItem("profile"))
  initialState = JSON.parse(localStorage.getItem("profile"));

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, ...action?.data };
    case UPDATE:
      return { ...state, ["result"]: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...null };
    default:
      return state;
  }
};

export default authReducer;
