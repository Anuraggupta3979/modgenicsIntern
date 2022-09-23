import React from "react";

import ImageContainer from "../components/ImageContainer";
function Home({ src }) {
  return (
    <div>
      <ImageContainer src={src} />
    </div>
  );
}

export default Home;
