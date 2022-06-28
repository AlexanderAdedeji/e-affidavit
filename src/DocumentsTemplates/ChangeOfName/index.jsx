import React from "react";
import { useLocation } from "react-router-dom";

const ChangeOfName = () => {
  const location = useLocation();
  console.log(location)

  return <div>ChangeOfName</div>;
};

export default ChangeOfName;
