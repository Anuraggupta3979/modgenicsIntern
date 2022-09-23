import React from "react";

function ImageContainer({ src }) {
  return (
    <div>
      <div className="geeks">
        <img src={src} alt="Geeks Image" />
        {/* <img src="https://picsum.photos/600/200" alt="Geeks Image" /> */}
      </div>
    </div>
  );
}

export default ImageContainer;
