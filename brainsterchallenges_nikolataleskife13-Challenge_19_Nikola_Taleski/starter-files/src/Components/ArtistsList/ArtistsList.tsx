import React from "react";
import { Props } from "../../Interfaces/artistData";
import ArtistItem from "../ArtistItem/ArtistItem";

interface ArtistsListProps {
  artistsList: Props[];
}

const ArtistsList = ({ artistsList }: ArtistsListProps) => {
  return (
    <div className="container pb-2 px-0">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 bg-gray">
          <h1 className="py-3 artist-list-title">Browse the artists</h1>
          {artistsList.map((artist) => {
            return <ArtistItem artistItem={artist} key={artist.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistsList;
