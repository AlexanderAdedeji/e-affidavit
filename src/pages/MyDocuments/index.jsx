import { Tab } from "bootstrap";
import { useState } from "react";
import TableLoader from "../../Loaders/TableLoader";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";
import Header from "./subComponent/Header";

const MyDocuments = () => {
  const [savedDocuments, setSavedDocuments] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [myDocumentState, setMyDocumentState] = useState({
    loading: false,
  });












  return (
    <div className="my-documents">
      <HomeNavHeader />

      <div className="my-documents-body">
        <Header />
   
      <div className="my-documents-lists">
      {myDocumentState.loading ? (
        <TableLoader />
      ) : (
        <div
          className=" table table-responsive table-view fixedHeight"
          id="logActivityScrollTarget"
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
              {savedDocuments.map((employee, idx) => {
                return (
                  <tr key={idx}>
                    <td className="d-flex justify-content"></td>
                    <td>
                      <small>{employee.email}</small>
                    </td>
                    <td>
                      {/* <Status
                  text={employee.is_active ? "Active" : "In Active"}
                  color={getUserStatusColor(employee.is_active)}
                /> */}
                      <small></small>
                    </td>

                    <td className="btns">
                      <span onClick={() => {}}>Continue</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      </div>
</div>
    </div>
  );
};

export default MyDocuments;
