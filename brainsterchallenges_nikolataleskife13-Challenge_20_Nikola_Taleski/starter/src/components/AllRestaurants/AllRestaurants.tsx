import React, { useContext } from "react";
import { RestaurantsContext } from "../../context/context";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const AllRestaurants = ({ filter }: { filter: string | null }) => {
  const { restaurants } = useContext(RestaurantsContext);

  const filteredRestaurants = filter
    ? restaurants.filter((restaurant) => restaurant.restauranttype === filter)
    : restaurants;

  return (
    <div className="container-fluid px-0 py-2">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="uppercase mb-5">all restaurants</h1>
          <div className="row justify-content-center">
            {filteredRestaurants.map((restaurant, index) => (
              <div key={index} className="col-2 p-0 mx-1 text-center mb-3">
                <RestaurantCard cardDetails={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRestaurants;
