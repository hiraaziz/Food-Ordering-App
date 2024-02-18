import React from "react";
import { IMG_CDN_URL  } from "../body/config"


const Carousal1 = ({ restData }) => {
  return (
    <div className="slider__item">
      <img
        className="slider__image"
        src={IMG_CDN_URL + restData.imageId}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};

export default Carousal1;