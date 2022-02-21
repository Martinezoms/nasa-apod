import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Loader from "./Components/Loader";
import Views from "./Views";
import "./App.css";
import AddedALert from "./Components/AddedALert";
import AddedAlreadyAlert from "./Components/AddedAlreadyAlert";

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(10);
  const [result, setResult] = useState([]);

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`;

  // Getting images from NASA API
  const getNasaPictures = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResult(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNasaPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative flex flex-col items-center mt-1 mb-6">
          {/* <AddedALert />
        <AddedAlreadyAlert /> */}
          <Navigation />
          <Views result={result} />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
