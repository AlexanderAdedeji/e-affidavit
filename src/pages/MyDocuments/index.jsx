import { useState, useEffect } from "react";
import { getUser } from "../../helper/storage";
import { useNavigate } from "react-router-dom";
import TableLoader from "../../Loaders/TableLoader";
import { fetchDoucments } from "../../services/documentService";
import NoFile from "../../component/NoFile";
import HomeNavHeader from "../Home/subComponent/HomeNavHeader";
import Header from "./subComponent/Header";
import { complexDateTimeFormatter } from "../../helper/dateTimeFormat";
import { getBackgroundCheckStatusColor } from "../../helper/status-colors";
import Status from "../../component/Status";

const MyDocuments = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [savedDocuments, setSavedDocuments] = useState([]);
  const [myDocumentState, setMyDocumentState] = useState({
    loading: true,
  });

  useEffect(() => {
    getDocumentsByUser(user.id);
  }, []);

  const getDocumentsByUser = async (id) => {
    setMyDocumentState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    await fetchDoucments(id)
      .then((res) => {
        setSavedDocuments(res.data);
        setMyDocumentState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
        setMyDocumentState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  return (
    <div className="my-documents">
      <HomeNavHeader />

      <div className="my-documents-body">
        <Header />

        <div className="my-documents-lists">
          {myDocumentState.loading ? (
            <TableLoader />
          ) : savedDocuments.length === 0 ? (
            <NoFile text="No Documents Found, Click Create New to Create New Documents" />
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
                  {savedDocuments.map((document, idx) => {
                    let date = complexDateTimeFormatter(document.created_at);
                    return (
                      <tr key={idx}>
                        <td className="">{document.id}</td>
                        <td>
                          <small>{`${date.formatedDay} of ${date.formatedMonth} ${date.formattedYear}`}</small>
                        </td>
                        <td>
                          <Status
                            text={document.status}
                            color={getBackgroundCheckStatusColor(
                              document.status
                            )}
                          />
                          <small></small>
                        </td>

                        <td className="btns">
                          <span
                            onClick={() => {
                              navigate("/view-myDocuments", {
                                state: {
                                  id: document.id,
                                  status: document.status,
                                },
                              });
                            }}
                          >
                            View
                          </span>
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
