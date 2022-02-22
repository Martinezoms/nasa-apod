import HomeCard from "../Components/HomeCard";
import HomeNav from "../Components/HomeNav";

function Home({ result, favorites, saveFavorites, fetchFavorites, setAdded, setAlreadyAdded, getNasaPictures }) {
  return (
    <div className="flex flex-col items-center">
      <HomeNav getNasaPictures={getNasaPictures} />
      {result.map((item, i) => (
        <HomeCard
          {...item}
          key={i}
          result={result}
          favorites={favorites}
          saveFavorites={saveFavorites}
          fetchFavorites={fetchFavorites}
          setAdded={setAdded}
          setAlreadyAdded={setAlreadyAdded}
        />
      ))}
    </div>
  );
}

export default Home;
