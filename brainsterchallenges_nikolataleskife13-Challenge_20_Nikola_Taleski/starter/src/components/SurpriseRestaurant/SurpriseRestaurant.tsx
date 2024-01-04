import { Link } from "react-router-dom";
import { RestaurantsProps } from "../../interfaces/interfaces";

interface Props {
  randomRestaurant: RestaurantsProps;
}

const SurpriseMe = ({ randomRestaurant }: Props) => {
  return (
    <div>
      <h1 className="text-center">DON'T KNOW WHAT TO EAT?</h1>
      <Link className="btn w-100" to={`/restaurant/${randomRestaurant.slug}`}>
        <p className="m-0 py-2 button-surprise">Surprise me!</p>
      </Link>
    </div>
  );
};

export default SurpriseMe;
