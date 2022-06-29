import React from "react";
import ContentLoader from "react-content-loader";

const TableLoader = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={460}
    // viewBox={"0 0 100vw 460"}
    backgroundColor={"#ffffff"}
  >
    <rect x="-2" y="" rx="2" ry="2" width="100%" height="48" />
    <rect x="4" y="70" rx="2" ry="2" width="100%" height="343" />
  </ContentLoader>
);

TableLoader.metadata = {
  name: "Didier Munezero",
  github: "didiermunezero",
  description: "Grid for content of head and body",
  filename: "HeadBodyGrid",
};

export default TableLoader;
