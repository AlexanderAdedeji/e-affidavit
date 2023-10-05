import axios from "axios"




export const login = async (data) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}user/login`, data);
};


export const signUp = async (data) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}user/sign_up`, data);
};
