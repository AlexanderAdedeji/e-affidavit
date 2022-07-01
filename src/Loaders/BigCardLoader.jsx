import React from 'react'
import ContentLoader from 'react-content-loader'

const BigCardLoader = (props) => {
  return (
    <ContentLoader 
    speed={2}
    width={"100%"}
    height={550}
    backgroundColor={"#ffffff"}
    {...props}
  >
    <rect x="-2" y="34" rx="2" ry="2" width="100vw" height="550" />
  </ContentLoader>
  )
}

export default BigCardLoader