import * as api from "../api";

export const getJobs = async (job, location) => {
  const jobType = job.toLowerCase();
  const city = location.split(',')[0].trim().toLowerCase();
  const state = location.split(',')[1].trim().toLowerCase();
  console.log(job, city, state)
  try {
    const { data } = await api.getJobs({jobType, city, state});
    return data;
  } catch (error) {
    return error?.response?.data;
  }
}

export const getAllJobs = async () => {
  try {
    const { data } = await api.getAllJobs();
    return data;
  } catch (error) {
    return error?.response?.data;
  }
}

export const postJob = async (formData, dispatch) => {
  const skillsReq = [formData.skill];
  const languages = [formData.language];
  formData.skillsReq = skillsReq;
  formData.languages = languages;
  try {
    const { data } = await api.postJob(formData);
    console.log(data);
    if(!data?.error)
      dispatch({type: 'UPDATE', data});
    return data;
  } catch (error) {
    return error?.response?.data;
  }
}

export const applyJob = async (formData, dispatch)=>{
  try{
    const { data }= await api.applyJob(modifyFormData(formData));
    console.log(data?.result);
    if(!data?.error)
      dispatch({ type: 'UPDATE', data: data?.result });
    return data;
  }catch(error){
    return error?.response?.data;
  }
}

const modifyFormData = (formData) => {
  const qualification = [];
  var tempQual = {};
  for(const data in formData) {
    if(data.charAt(0) === '_') {
      const temp = data.split('_');
      if(!tempQual.type)
        tempQual.type = temp[1];
      tempQual[temp[2]] = formData[data];
    }
    var i = 0;
    for(const t in tempQual)
      i++;
    if(i === 4) {
      i = 0;
      qualification.push(tempQual);
      tempQual = {};
    }
  }
  formData.locality = formData.locality.toLowerCase();
  formData.city = formData.city.toLowerCase();
  formData.district = formData.district.toLowerCase();
  formData.state = formData.state.toLowerCase();
  formData.qualification = qualification;
  formData.experience = [{job: formData.job, year: formData.year}];
  const skillsReq = [formData.skill];
  const languages = [formData.language];
  formData.skills = skillsReq;
  formData.languages = languages;
  ['job', 'year', '_10th_board', '_10th_percentage', '_10th_school', '_12th_board', '_12th_percentage', '_12th_school', '_grad_board', '_grad_percentage', '_grad_school', 'language', 'skill'].forEach(item => delete formData[item]);
  return formData;
}