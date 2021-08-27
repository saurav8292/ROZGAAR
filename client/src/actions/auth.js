import { AUTH } from '../constants/actionTypes';
import * as api from "../api";

// export const signin = (formData, history) => async (dispatch) => {
//   try {
//     // login user
//     const { data } = await api.signin(formData);
//     dispatch({ type: AUTH, data })
//     history.push('/');
//   } catch (err) {
//     console.log(err);
//   }
// }

export const signin = async (formData, dispatch) => {
  try {
    // login user
    const { data } = await api.signin(formData);
    console.log(data);
    if(!data.error)
      dispatch({ type: AUTH, data })
  } catch (err) {
    return err["response"]?.data;
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // register user
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
}

export const resetPassword = async (email, history) => {
  try {
    console.log(email);
    const { data } = await api.resetPassword(email);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export const changePassword = async (password, token) => {
  try {
    const { data } = await api.changePassword(password, token);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export const getProfile = async(userId)=>{
  try{
    const {data} = await api.getProfile({userId});
    //console.log("returned \n:" +profile);
    return data;
  }catch(err){
    console.log(err);
  }
}