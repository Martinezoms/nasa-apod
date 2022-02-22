import FavNav from "../Components/FavNav";
import FavCard from "../Components/FavCard";

function Favorites({ favorites, setFavorites }) {
  console.log(favorites);
  return (
    <div className="flex flex-col items-center">
      <FavNav />

      {favorites.length === 0 ? (
        <div className="text-4xl font-medium text-black/20 fixed top-1/2 message">
          <h1>NOTHING TO SEE HERE</h1>
        </div>
      ) : (
        favorites.map((item, i) => <FavCard {...item} key={i} favorites={favorites} setFavorites={setFavorites} />)
      )}
    </div>
  );
}

export default Favorites;
