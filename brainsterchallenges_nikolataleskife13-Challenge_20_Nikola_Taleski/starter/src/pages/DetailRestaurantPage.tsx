import React, { ChangeEvent, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/context";
import { RestaurantsProps, reviewsList } from "../interfaces/interfaces";
import "../css/main.css";

interface DetailsRestaurantProps {
  restaurantDetails?: RestaurantsProps;
}

const DetailRestaurantPage: React.FC<DetailsRestaurantProps> = ({
  restaurantDetails,
}: DetailsRestaurantProps) => {
  const { slug } = useParams();
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const [author, setAuthor] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [range, setRange] = useState<number>(5);
  const [review, setReview] = useState<reviewsList[]>([]);

  const handleAuthor = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAuthor(e.target.value);
  };

  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
    setRange(+e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReview: reviewsList = {
      id: review.length + 1,
      comment: comment,
      stars: range,
      author: author,
    };

    const updatedRestaurantDetails: RestaurantsProps = {
      ...restaurantDetails!,
      reviewsList: [...restaurantDetails!.reviewsList, newReview],
    };

    const updatedRestaurants = restaurants.map((r) =>
      r.slug === slug ? updatedRestaurantDetails : r
    );
    setRestaurants(updatedRestaurants);

    setReview([...review, newReview]);
    setAuthor("");
    setComment("");
    setRange(5);
  };

  if (!restaurantDetails) {
    const foundRestaurant = restaurants.find(
      (restaurant) => restaurant.slug === slug
    );

    if (!foundRestaurant) {
      return <div>This restaurant does not exist</div>;
    }

    restaurantDetails = foundRestaurant;
  }

  const totalReviews = restaurantDetails.reviewsList.length;
  const averageRating =
    totalReviews > 0
      ? restaurantDetails.reviewsList.reduce(
          (sum, review) => sum + review.stars,
          0
        ) / totalReviews
      : 0;

  return (
    <div className="card all-fonts">
      <img src={restaurantDetails.image} alt="" />
      <div className="data-style">
        {totalReviews > 0 && (
          <div>
            <p className="m-0 review">Rating: {averageRating.toFixed(1)}</p>
            <p className=" review">Based on {totalReviews} reviews</p>
          </div>
        )}
        <p>{restaurantDetails.phone}</p>
        <p>{restaurantDetails.email}</p>
        <p>{restaurantDetails.address}</p>
        {restaurantDetails.parkinglot && restaurantDetails.parkinglot
          ? `We have a parking lot waiting for you`
          : `Sorry, we do not have a parking lot waiting for you`}
      </div>
      <div>
        <h2 className="text-center my-5">REVIEWS</h2>
        {restaurantDetails.reviewsList.map((review) => (
          <div key={review.id} className="data-style-review mb-3">
            <p>Author:{review.author}</p>
            <p>Message: {review.comment}</p>
            <p className="m-0">Stars: {review.stars}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center my-5">REVIEW FORM</h2>
        <label htmlFor="">Name</label>
        <br />
        <textarea className="w-100" value={author} onChange={handleAuthor} />
        <br />
        <label htmlFor="">Comment</label>
        <br />
        <textarea className="w-100" value={comment} onChange={handleComment} />
        <br />
        <label htmlFor="">Stars</label>
        <input
          type="range"
          className="w-100"
          value={range}
          onChange={handleRange}
          max={10}
        />
        <br />
        <button className="button-leave py-2 mt-2">Leave a review</button>
      </form>

      <hr />
    </div>
  );
};

export default DetailRestaurantPage;
