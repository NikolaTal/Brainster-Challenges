import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantsContext } from "../../context/context";

interface CuisinesProps {
  typeChange: (filter: string | null) => void;
}

const Cuisines = ({ typeChange: onTypeChange }: CuisinesProps) => {
  const { restaurants } = useContext(RestaurantsContext);
  const [restaurantTypes, setRestaurantTypes] = useState<string[]>([]);

  useEffect(() => {
    const types = Array.from(
      new Set(restaurants.map((restaurant) => restaurant.restauranttype))
    );
    setRestaurantTypes(types);
  }, [restaurants]);

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-12" style={{ padding: "0 150px" }}>
          <h1 className="text-center uppercase mb-3">Cuisines</h1>
          <div className="d-flex justify-content-between">
            {restaurantTypes.map((type) => (
              <Link
                key={type}
                className="filter-buttons"
                to={`/cuisines/${type}`}
                onClick={() => onTypeChange(type)}
              >
                {type}
              </Link>
            ))}
          </div>
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default Cuisines;
