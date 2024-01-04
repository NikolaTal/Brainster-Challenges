import { createContext, useEffect, useState, ReactNode } from "react";
import { RestaurantsProps } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

interface ContextData {
  restaurants: RestaurantsProps[];
  setRestaurants: React.Dispatch<React.SetStateAction<RestaurantsProps[]>>;
  favorites: RestaurantsProps[];
  addToFavorites: (restaurant: RestaurantsProps) => void;
  removeFromFavorites: (id: string) => void;
}

export const RestaurantsContext = createContext({} as ContextData);

const PostsProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  const [favorites, setFavorites] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (restaurant: RestaurantsProps) => {
    setFavorites((restaurantsFavorites) => [
      ...restaurantsFavorites,
      restaurant,
    ]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((restaurantsFavorites) =>
      restaurantsFavorites.filter((favourites) => favourites.id !== id)
    );
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export default PostsProvider;
