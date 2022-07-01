import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const DocumentDisplayContext = createContext({
  documentDetails: {},
  saveDcoumnetAlert: (e) => {},
  setDocumentDetails: () => {},
  checkoutNavigate: () => {},
});

export const DocumentDisplayProvider = ({ children }) => {
  const navigate = useNavigate();
  const [documentDetails, setDocumentDetails] = useState({
    documentRef: "",
    price: "",
    document_name:""
  });

  const updateDocumentRef = ({
    documentRef = documentDetails.documentRef,
    price = documentDetails.price,
    name=documentDetails.document_name
  } = {}) => {
    setDocumentDetails((prevState) => ({
      ...prevState,
      documentRef: documentRef,
      price: price,
      document_name:name
    }));
  };

  const saveDocumentAlert = async (callbackFunction) => {
    Swal.fire({
      title: "Save Document",
      icon: "info",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Save And Continue",
      denyButtonText: "Save And Checkout",
      showLoaderOnConfirm: true,
      showLoaderOnDeny: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: async () => {
        try {
          const response = await callbackFunction();
          console.log(response);
          updateDocumentRef({
            documentRef: response.data.id,
            price: response.data.price,
          });

          Swal.fire(
            'Good job!',
            'Document Saved Successfully!',
            'success'
          )
        } catch (errors) {
          console.log(errors);
        }
      },

      preDeny: async () => {
        try {
          const response = await callbackFunction();
          console.log(response);
          updateDocumentRef({
            documentRef: response.data.id,
            price: response.data.price,
          });
          Swal.fire(
            'Good job!',
            'Document Saved Successfully!',
            'success'
          )
        } catch (errors) {
          console.log(errors);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/my-documents");
      }
      if (result.isDenied) {
        navigate("/checkout");
      }
    });
  };

  const checkoutNavigate = (documentRef) =>
    navigate("/checkout", {
      state: { savedDocumentId: documentRef },
    });

  const value = { saveDocumentAlert, checkoutNavigate, documentDetails,updateDocumentRef };
  return (
    <DocumentDisplayContext.Provider value={value}>
      {children}
    </DocumentDisplayContext.Provider>
  );
};
