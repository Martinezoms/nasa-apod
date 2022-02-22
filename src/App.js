import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader";
import Views from "./Views";
import "./App.css";
import AddedALert from "./Components/AddedALert";
import AddedAlreadyAlert from "./Components/AddedAlreadyAlert";

function App() {
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [result, setResult] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const count = 10;

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`;

  // Getting images from NASA API
  const getNasaPictures = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log(error);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    setLoading(false);
  };

  // Fetching existing favorites from localStorage
  const fetchFavorites = () => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
  };

  // saving favorites
  const saveFavorites = (favorite) => {
    const newFavorites = [...favorites, favorite];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    getNasaPictures();
    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="relative flex flex-col items-center mt-1 mb-6">
        {added && <AddedALert />}
        {alreadyAdded && <AddedAlreadyAlert />}
        <Views
          result={result}
          favorites={favorites}
          setFavorites={setFavorites}
          saveFavorites={saveFavorites}
          fetchFavorites={fetchFavorites}
          setAdded={setAdded}
          setAlreadyAdded={setAlreadyAdded}
          getNasaPictures={getNasaPictures}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
