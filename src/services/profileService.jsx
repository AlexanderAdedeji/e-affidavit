import axios from "axios";


export const uploadProfilePicture = async (data, user_id) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}imageStatus/upload_image/?user_id=${user_id}`,
    data
  );
};



export const signatureUpload = async (data) => {
  return await axios.put(
    `${process.env.REACT_APP_BASE_URL}commissioner/update_signature`,
    data
  );
};



export const stampUpload = async (data) => {
  return await axios.put(
    `${process.env.REACT_APP_BASE_URL}commissioner/update_stamp`,
    data
  );
};