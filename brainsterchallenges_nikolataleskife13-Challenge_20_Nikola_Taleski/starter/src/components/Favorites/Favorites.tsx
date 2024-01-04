import React, { useContext } from "react";
import { RestaurantsContext } from "../../context/context";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Favourites = () => {
  useContext(RestaurantsContext);

  const { favorites } = useContext(RestaurantsContext);

  return (
    <div className="container-fluid">
      <div className="row uppercase">
        <div className="col-12 text-center">
          <h1>Your favourite restaurants</h1>
          <div className="row justify-content-center">
            {favorites.length > 0 ? (
              favorites.map((favorite, index) => (
                <div key={index} className="col-2 p-0 mx-1 text-center mb-3">
                  <RestaurantCard cardDetails={favorite} />
                </div>
              ))
            ) : (
              <p>There are no favuorites restaurants at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
