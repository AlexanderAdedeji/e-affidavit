
import axios from "axios";

export const commisionerLogin = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}commissioner/commissioner_login`,
    data
  );
};




export const fetchDocument= async (data) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}commissioner/get_document?documentRef=${data}`,

  );
};