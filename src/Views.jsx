import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

function Views({
  result,
  favorites,
  setFavorites,
  saveFavorites,
  fetchFavorites,
  setAdded,
  setAlreadyAdded,
  getNasaPictures
}) {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <Home
            result={result}
            favorites={favorites}
            saveFavorites={saveFavorites}
            fetchFavorites={fetchFavorites}
            setAdded={setAdded}
            setAlreadyAdded={setAlreadyAdded}
            getNasaPictures={getNasaPictures}
          />
        }
      />
      <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
      <Route
        path="*"
        element={
          <div>
            <h4>404 Page not found</h4>
          </div>
        }
      />
    </Routes>
  );
}

export default Views;
