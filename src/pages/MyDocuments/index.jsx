import { useState, useCallback, useEffect } from "react";
import TableLoader from "../../Loaders/TableLoader";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";
import Header from "./subComponent/Header";
import { toast } from "react-toastify";
import { myDocumentsAPI } from "../../services/documentService";
import { getUser } from "../../helper/storage";
import Status from "../../component/Status";
import NoFile from "../../component/NoFile";

const MyDocuments = () => {
  const user = getUser()
  const [savedDocuments, setSavedDocuments] = useState([]);
  const [myDocumentState, setMyDocumentState] = useState({
    loading: false,
  });


console.log(user)

  const myDocuments = useCallback(async () => {
    setMyDocumentState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const { data } = await myDocumentsAPI(user.id);
    
      setSavedDocuments(data)
      setMyDocumentState((prevState) => ({
        ...prevState,
        loading: false,
      }));
   } catch (errors) {
      toast.error(errors.response.data.detail);
      setMyDocumentState((prevState) => ({
        ...prevState,
        loading: true,
      }));
    }
  }, []);



useEffect(()=>{
  myDocuments()
},[])



  return (
    <div className="my-documents">
      <HomeNavHeader />

      <div className="my-documents-body">
        <Header />

      <div className="my-documents-lists">
      {myDocumentState.loading ? (
        <TableLoader />
      ) : 
        savedDocuments.length ===0? <NoFile text={"No Documents"}/> :(
        <div
          className=" table table-responsive "
      
        >
          <table className="table-view">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Date Created</th>
                <th> Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedDocuments.map((document, idx) => {
                return (
                  <tr key={idx}>
                    <td className="d-flex justify-content">       <small>{document.id}</small></td>
                    <td>
                      <small>{document.document_category}</small>
                    </td>
                    <td>

                      <Status text={document.status} color={document.status.toLowerCase()}/>
                      {/* <Status
                  text={employee.is_active ? "Active" : "In Active"}
                  color={getUserStatusColor(employee.is_active)}
                />
                      <small></small> */}
                    </td>

                    <td className="btns">
                      <span onClick={() => {
                        console.log(document)
                      }}>
                        {
                          document.status.toLowerCase() === 'saved'? "Continue" : "View"
                        }
                        
                        </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )
        
        
        
        }
      </div>
</div>
    </div>
  );
};

export default MyDocuments;
