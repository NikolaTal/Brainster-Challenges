import { useContext } from "react";
import { RestaurantsContext } from "../../context/context";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const PopularRestaurants = () => {
  const { restaurants } = useContext(RestaurantsContext);

  const ratedRestaurants = restaurants.sort((first, second) => {
    const averageRating1 =
      first.reviewsList.reduce((sum, review) => sum + review.stars, 0) /
      Math.max(1, first.reviewsList.length);
    const averageRating2 =
      second.reviewsList.reduce((sum, review) => sum + review.stars, 0) /
      Math.max(1, second.reviewsList.length);

    return averageRating2 - averageRating1;
  });

  const topRatedRestaurants = ratedRestaurants.slice(0, 10);

  return (
    <div className="container-fluid mt-5">
      <hr />
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="uppercase my-4">OUR MOST POPULAR RESTAURANTS</h1>
          <div className="row justify-content-center">
            {topRatedRestaurants.map((restaurant, index) => (
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

export default PopularRestaurants;
