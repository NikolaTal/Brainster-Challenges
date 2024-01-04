import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/context";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import { RestaurantsProps } from "../interfaces/interfaces";

const CuisinePage = () => {
  const { type } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [filteredCuisine, setFilteredCuisine] = useState<RestaurantsProps[]>(
    []
  );

  useEffect(() => {
    if (restaurants.length > 0) {
      const currentCuisine = restaurants.filter(
        (el) => el.restauranttype === type
      );
      setFilteredCuisine(currentCuisine);
    }
  }, [type, restaurants]);

  return (
    <div className="container-fluid px-0 py-2">
      <div className="row justify-content-center">
        {filteredCuisine.map((card) => (
          <div key={card.id} className="col-2 p-0 mx-1 text-center mb-3">
            <RestaurantCard cardDetails={card} />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default CuisinePage;
