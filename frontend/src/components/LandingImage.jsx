import React from "react";

function LandingImage(props) {
  const { images, imgAlt } = props || {};
  return (
    <div className="max-w-full mx-auto flex justify-center items-center mb-[-8px]">
      {images.map((item, index) => (
        <div className="w-[220px] h-[287px] overflow-hidden ">
          <img
            className="w-full "
            src={`${item}`}
            alt={`${imgAlt}`}
          />
        </div>
      ))}
    </div>
  );
}

export default LandingImage;
