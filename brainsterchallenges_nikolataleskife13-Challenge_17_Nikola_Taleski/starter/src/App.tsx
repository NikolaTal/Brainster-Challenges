import Banner from "./components/Banner/Banner";
import DetailsBlock from "./components/Details-block/DetailsBlock";
import Footer from "./components/Footer/Footer";
import PlacesContainer from "./components/Places-container/PlacesContainer";
import "./css/main.scss";
import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock
        title="Stories of Adventure"
        image="https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o"
      />
      <PlacesContainer />
      <DetailsBlock
        title="Popular Adventures"
        image="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
      />
      <Footer />
    </div>
  );
};

export default App;
