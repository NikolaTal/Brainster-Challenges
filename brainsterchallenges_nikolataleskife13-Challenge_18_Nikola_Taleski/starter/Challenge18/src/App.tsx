import React, { useState } from "react";
import "./App.css";
import "./css/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import CardsContainer from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedBikes, setSelectedBikes] = useState<string[]>(["Show All"]);

  return (
    <div className="bg-color container-fluid">
      <div className="row">
        <div className="col-10 mx-auto bg-white">
          <Navbar />
          <div className="row">
            <div className="col-3">
              <Filters
                selectedBikes={selectedBikes}
                selectedFilter={setSelectedBikes}
              />
            </div>
            <div className="col-9 pt-5">
              <CardsContainer selectedFilters={selectedBikes} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
