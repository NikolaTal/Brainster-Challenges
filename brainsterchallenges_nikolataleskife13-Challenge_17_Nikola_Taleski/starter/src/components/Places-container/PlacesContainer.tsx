import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Place from "../Place/Place";
import { PlaceData } from "../places";

function PlacesContainer() {
  const [data, setData] = useState<PlaceData[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="container p-0 m-0">
      <div className="row">
        {data.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
}

export default PlacesContainer;
