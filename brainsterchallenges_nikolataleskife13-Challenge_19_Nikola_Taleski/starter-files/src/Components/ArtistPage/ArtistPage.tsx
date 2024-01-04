import React from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../Interfaces/artistData";
import AlbumsList from "../AlbumsList/AlbumsList";

interface ArtistPageProps {
  artistPage: Props[];
}

const ArtistPage = ({ artistPage }: ArtistPageProps) => {
  const { id } = useParams();

  const artist = artistPage.find(
    (artistItem) => artistItem.id.toString() === id
  );

  return (
    <div className="container bg-gray">
      <div className="row">
        <div className="col-12">
          {artist && (
            <div>
              <img
                src={require(`../../images/covers/${artist.cover}.jpg`)}
                alt={artist.name}
                className="img-size m-4"
              />
              <h1>{artist.name}</h1>
              <p>{artist.bio}</p>
              <AlbumsList artistId={artist.id} albums={artist.albums} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
