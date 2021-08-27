import { FETCH_JOB } from "../constants/actionTypes";

const jobReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_JOB: 
       return { ...state, ...action?.data }; 
    default:
      return state;
  }
};

export default jobReducer;
