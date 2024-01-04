export interface RestaurantsProps {
  isFavorite: boolean;
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: reviewsList[];
}

export interface reviewsList {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
