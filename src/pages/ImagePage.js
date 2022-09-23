import React from "react";

import ImageContainer from "../components/ImageContainer";
function ImagePage({ src }) {
  return (
    <div>
      <ImageContainer src={src} />
    </div>
  );
}

export default ImagePage;
