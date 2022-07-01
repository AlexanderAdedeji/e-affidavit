import React from 'react';
import { useEffect, useState } from "react";
import LossOfDocumentTemplate from "../../../DocumentsTemplates/LossOfDocuments/subComponent/LossOfDocumentTemplate";
import BigCardLoader from "../../../Loaders/BigCardLoader";
import { fetchDocument } from "../../../services/commissionerService";
import FieldSection from '../../Documents/subComponent/FieldSection';
import TestDocument from '../../Documents/subComponent/TestDocument';

const SavedDocuments = ({id}) => {
    const [documentVariables, setDocumentVariables] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getDocument();
    }, []);
  
    const getDocument = async () => {
      setLoading(true);
      await fetchDocument(id)
        .then((res) => {
          console.log(res)
          setDocumentVariables(res.data);
          setLoading(false);
        })
        .catch((errors) => {
          console.log(errors);
        });
    };

    // const saveDocuments = async (data) => {
    //     // setBtnLoader(true);
    //     const dataToSend = {
    //       user_id: user.id,
    //       document_category_id: location.state.id,
    //       first_name: data.first_name,
    //       last_name: data.last_name,
    //       middle_name: data.middle_name,
    //       address: data.address,
    //       gender: data.gender,
    //       religion: data.religion,
    //       nationality: data.nationality,
    //       state: data.state,
    //       court: data.court,
    //       city: data.city,
    //       docNo: data.docNo,
    //       docType: data.docType,
    //       deponentImage: data.deponentImage,
    //       issuer: data.issuer,
    //       issuerAddress: data.issuerAddress,
    //       price: documentDetails.price,
    //     };
    //     return await saveDocumentsAPI(dataToSend);
    //   };

    // const onDocumentSaveHandler = () =>
    // saveDocumentAlert(() => saveDocuments(documentVariables));
    const convert2base64 = (e) => {
        console.log(e.target)
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setDocumentVariables((prevState) => ({
            ...prevState,
            deponentImage: reader.result.toString(),
          }));
        };
        reader.readAsDataURL(file);
    
      };
  return (
    <div className='documents'>
        {loading? <BigCardLoader/> :

        <>
      <div className="row">
        <div className="col-md-8">
          <TestDocument {...documentVariables} />
        </div>
        <div className="col-md-4">
          <FieldSection
            {...documentVariables}
            setDocumentVariables={setDocumentVariables}
            convert2base64={convert2base64}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center ">
          <button className="btn btn-dark w-50">
            {" "}
{/*             
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : ( */}
              <span>Save Document</span>
            {/* )} */}
          </button>
        </div>
      </div>
  

      </>
}

    </div>
  )
}

export default SavedDocuments