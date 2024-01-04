import "./css/main.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./components/Footer/Footer";
import PostsProvider from "./context/context";
import CuisinePage from "./pages/CusinePage";
import DetailsRestaurantPage from "./pages/DetailRestaurantPage";
import Favourites from "./components/Favorites/Favorites";

const App = () => {
  return (
    <PostsProvider>
      <div className="App container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cuisines/:type" element={<CuisinePage />} />
              <Route
                path="/restaurant/:slug"
                element={<DetailsRestaurantPage />}
              />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </PostsProvider>
  );
};

export default App;
