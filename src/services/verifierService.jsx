
import axios from "axios";

export const verifierLogin = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}commissioner/commissioner_login`,
    data
  );
};




export const fetchAttestedDocument= async (data) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}verifier/get_attested_document?documentRef=${data}`,

  );
};
