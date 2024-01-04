import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { PlaceData } from "../places";

const Place = ({ place }: { place: PlaceData }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-0">
      <div className="position-relative">
        <img className="images" src={place.img} alt={place.place} />
        <div className="centerData w-100">
          <h2 className="text-center">{place.place}</h2>
          <p className="text-center">{place.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;
