import axios from "axios";

export const fetchDoucment = async (data) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}user/login`, data);
};

export const payForDocumentAPI= async (data) => {
  console.log(data);
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}documents/pay_for_document`,
    data
  );
};


export const saveDocumentsAPI = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}documents/save_document`,
    data
  );
};

