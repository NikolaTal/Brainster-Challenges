import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../../Interfaces/artistData";

interface AlbumsListProps {
  albums: Props["albums"];
  artistId: number;
}

const AlbumsList = ({ albums, artistId }: AlbumsListProps) => {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12"></div>
        {albums.map((album) => (
          <div key={album.albumId} className="col-6 p-0">
            <Link to={`/artist/${artistId}/${album.albumId}`}>
              <img
                src={require(`../../images/albums/${album.cover}.jpg`)}
                alt={album.title}
                className="img-fluid"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
