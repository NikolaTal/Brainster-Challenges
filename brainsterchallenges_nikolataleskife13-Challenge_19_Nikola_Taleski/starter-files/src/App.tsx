import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ArtistsList from "./Components/ArtistsList/ArtistsList";
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import AlbumPage from "./Components/AlbumPage/AlbumPage";
import artists from "./db";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ArtistsList artistsList={artists} />} />
          <Route path="artist/:id" element={<ArtistPage artistPage={artists} />} />
          <Route
            path="artist/:id/:albumId"
            element={<AlbumPage artists={artists} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
