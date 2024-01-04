import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantsContext } from "../../context/context";
import { RestaurantsProps } from "../../interfaces/interfaces";
import { FaHeart } from "react-icons/fa";

interface CardProps {
  cardDetails: RestaurantsProps;
}

const RestaurantCard: React.FC<CardProps> = ({ cardDetails }) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(RestaurantsContext);

  const isFavorite = favorites.some((fav) => fav.id === cardDetails.id);

  const handleAddRemoveFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(cardDetails.id);
    } else {
      addToFavorites(cardDetails);
    }
  };

  const totalReviews = cardDetails.reviewsList.length;
  const averageRating =
    totalReviews > 0
      ? cardDetails.reviewsList.reduce((sum, review) => sum + review.stars, 0) /
        totalReviews
      : 0;

  return (
    <Link
      to={`/restaurant/${cardDetails.slug}`}
      className="text-decoration Image position-relative"
    >
      <div className="card" style={{ width: "14rem", height: "20rem" }}>
        <img
          className="card-img-top position-relative"
          src={cardDetails.image}
          alt={cardDetails.image}
          style={{ height: "13rem" }}
        />
        <div className="favorite-icon" onClick={handleAddRemoveFavorites}>
          <FaHeart className={`heart-icon position-absolute fa-heart`} />
        </div>
        <div className="card-body pt-0">
          <h4 className="businessname">{cardDetails.businessname}</h4>
          <h5 className="restauranttype">{cardDetails.restauranttype}</h5>
          {totalReviews > 0 && (
            <div>
              <p className="m-0">Rating: {averageRating}</p>
              <p className="m-0">Based on {totalReviews} reviews</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
