import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../../Interfaces/artistData";

interface ArtistItemProps {
  artistItem: Props;
}

const ArtistItem = ({ artistItem }: ArtistItemProps) => {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <Link to={`/artist/${artistItem.id}`}>
            <img
              src={require(`../../images/covers/${artistItem.cover}.jpg`)}
              alt={artistItem.name}
              className="img-fluid position-relative"
            />
            <p className="artist-name-on-image">{artistItem.name}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;
