import * as api from "../api";

export const extractEmpPosts = async (userId) => {
  try {
    const { data } = await api.extractEmpPosts({ userId });
    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

// jobSeeker Appn
export const fetchAppn = async (userId) => {
  try {
    const { data } = await api.fetchAppn({ userId });
    return data;
  } catch (error) {
    return error?.response?.data;
  }
};

//getting employer applications when a particular postId is Provided
export const empAppn = async (empId, jobPostId) => {
  try {
    const { data } = await api.empAppn(empId, jobPostId);
    return data;
  } catch (error) {
    return error?.response?.data;
  }
};
