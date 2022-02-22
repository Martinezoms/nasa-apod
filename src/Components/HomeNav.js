import React from "react";
import { Link } from "react-router-dom";

function HomeNav({ getNasaPictures }) {
  return (
    <div className="fixed flex justify-center w-screen gap-4 top-0 text-2xl text-red-600 font-bold cursor-pointer select-none p-1 bg-whiteSmoke nav">
      <div>
        <Link to="favorites">
          <span className="hover:text-red-800">Favorites</span>
        </Link>
      </div>
      <div>
        <span className="mr-4">&#8226;</span>
        <span className="hover:text-red-800" onClick={getNasaPictures}>
          Load More
        </span>
      </div>
    </div>
  );
}

export default HomeNav;
