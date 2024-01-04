import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-6 d-flex align-items-center ">
          <Link to="/" className="navbar">
            restaurant
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <Link to="/favourites">
            <FaHeart color="red" size={40} />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
