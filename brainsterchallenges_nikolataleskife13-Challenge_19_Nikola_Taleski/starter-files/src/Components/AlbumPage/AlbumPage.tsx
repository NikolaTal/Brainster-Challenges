import React from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../Interfaces/artistData";

interface AlbumPageProps {
  artists: Props[];
}

const AlbumPage = ({ artists }: AlbumPageProps) => {
  const { id, albumId } = useParams();

  const artist = artists.find((artistItem) => artistItem.id.toString() === id);
  const album = artist?.albums.find(
    (albumItem) => albumItem.albumId === albumId
  );

  return (
    <div className="bg-gray p-5">
      {album && (
        <>
          <img
            src={require(`../../images/albums/${album.cover}.jpg`)}
            alt={album.title}
            className="img-size"
          />
          <div className="mt-2">
            <p className="m-0 fs-5">
              <span className="bold-span">Title:</span> {album.title}
            </p>
            <p className="m-0 fs-5">
              <span className="bold-span">Year:</span> {album.year}
            </p>
            <p className="m-0 fs-5">
              <span className="bold-span">Price:</span> ${album.price}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumPage;
