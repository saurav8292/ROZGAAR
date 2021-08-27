const axios = require('axios');

const api = axios.create({ baseURL: "http://localhost:7866" });

export const signin = async (formData) => {
    const res = await api.post(`/user/signin`, formData);
    return res;
}

export const signup = async (formData) => {
  try {
    const res = await api.post(`/user/signup`, formData);
    return res;
  } catch (err) {
    return err;
  }
}

export const resetPassword = async (email) => {
  try {
    console.log(email);
    const res = await api.post(`/user/resetPassword`, { email });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const changePassword = async (newPassword, sentToken) => {
  try {
    console.log({ newPassword, sentToken });
    const res = await api.post(`/user/updatePassword`, {newPassword, sentToken});
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const getProfile = async(userId)=>{
  const result = await api.post('user/getProfile',userId);
  return result;
}

export const getJobs = async (formData) => {
  const result = await api.post(`/findJob`, formData);
  return result;
}

export const getAllJobs = async () => {
  const result = await api.post(`/job`);
  return result;
} 

export const extractEmpPosts = async(userId) => { 
   const result = await api.post(`/api/extractEmpPosts` , userId); 
   return result; 
}

export const postJob = async (formData) => {
  const result = await api.post(`/job/createJob`, formData);
  return result;
}

export const applyJob = async(formData) => {
  const result = await api.post(`/job/applyJob`, formData);
  return result;
}

export const fetchAppn = async(formData) => {
  const result = await api.post(`/api/seekerAppn`, formData);
  return result;
} 


export const empAppn = async (empId, jobPostId) => {
  // /api/empAppn?jobPostId=value
   if(!jobPostId){
     const result = await api.post(`api/empAppn` , {empId}); 
     return result;
   }
  
   const result = await api.post(`/api/empAppn/${jobPostId}` , {empId});  
   return result;
}