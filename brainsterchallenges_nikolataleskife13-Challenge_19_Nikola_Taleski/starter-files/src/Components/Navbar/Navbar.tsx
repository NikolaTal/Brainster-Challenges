import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 p-0">
          <Link to="/" className="link">
            <div className="navbar">
              <h1 className="navbar-title mx-auto">music db</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
