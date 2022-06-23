import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={335}
    height={470}
    viewBox="0 0 335 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="40" ry="40" width="335" height="470" />
  </ContentLoader>
)

export default MyLoader