import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export interface Props {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

interface CardProps {
  posts: Props[];
}

const Card: React.FC<CardProps> = ({ posts }) => {
  return (
    <div className="row mt-5">
      {posts.map((product: Props, index) => (
        <div key={index} className="col-4 mb-4">
          <div className="card">
            <img
              src={`./images/${product.image}.png`}
              alt={product.name}
              className="bike-image"
            />
            <div className="card-body bg-card-body">
              <h5>{product.name}</h5>
              <p>{product.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardsContainer: React.FC<{ selectedFilters: string[] }> = ({
  selectedFilters,
}) => {
  const [bikes, setBikes] = useState<Props[]>([]);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => setBikes(data.products));
  }, []);

  const filterBikes = (selectedBikes: string[]): Props[] => {
    return bikes.filter((product) => {
      if (selectedBikes.includes("Show All")) {
        return true;
      }

      if (selectedBikes.includes("Male") && product.gender === "MALE") {
        return true;
      }

      if (selectedBikes.includes("Female") && product.gender === "FEMALE") {
        return true;
      }

      return selectedBikes.some((item) => item === product.brand);
    });
  };

  const filteredPosts = filterBikes(selectedFilters);

  return <Card posts={filteredPosts} />;
};

export default CardsContainer;
