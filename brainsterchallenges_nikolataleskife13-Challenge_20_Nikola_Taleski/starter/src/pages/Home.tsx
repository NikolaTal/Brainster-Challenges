import React, { useContext, useEffect, useState } from "react";
import AllRestaurants from "../components/AllRestaurants/AllRestaurants";
import SurpriseMe from "../components/SurpriseRestaurant/SurpriseRestaurant";
import { RestaurantsContext } from "../context/context";
import { RestaurantsProps } from "../interfaces/interfaces";
import Cuisines from "../components/Cuisines/Cuisines";
import PopularRestaurants from "../components/PopularRestaurants/PopularRestaurants";

export default function HomePage() {
  const { restaurants } = useContext(RestaurantsContext);
  const [randomRestaurant, setRandomRestaurant] = useState<
    RestaurantsProps | undefined
  >();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    if (restaurants.length > 0) {
      const random = Math.floor(Math.random() * restaurants.length);
      const randomRestaurant = restaurants[random];
      setRandomRestaurant(randomRestaurant);
    }
  }, [restaurants]);

  const handleFilterChange = (filter: string | null) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      {randomRestaurant ? (
        <SurpriseMe randomRestaurant={randomRestaurant} />
      ) : null}
      <PopularRestaurants />
      <Cuisines typeChange={handleFilterChange} />
      <AllRestaurants filter={selectedFilter} />
      <hr />
    </div>
  );
}
