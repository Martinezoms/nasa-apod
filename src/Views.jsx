import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

function Views({ result }) {
  return (
    <Routes>
      <Route index path="/" element={<Home result={result} />} />
      <Route path="/favorites" element={<Favorites />} />
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
