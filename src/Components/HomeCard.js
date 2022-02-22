import { v4 } from "uuid";

function HomeCard({
  date,
  title,
  explanation,
  hdurl,
  copyright,
  url,
  result,
  favorites,
  saveFavorites,
  fetchFavorites,
  setAdded,
  setAlreadyAdded
}) {
  const storeFavorites = (itemUrl) => {
    result.forEach((item) => {
      if (item.url.includes(itemUrl)) {
        const { hdurl, url, title, explanation, date, copyright } = item;
        const newFavorite = {
          id: v4(),
          hdurl,
          url,
          title,
          explanation,
          date,
          copyright
        };
        if (favorites.every((item) => item.url !== newFavorite.url)) {
          saveFavorites(newFavorite);
          fetchFavorites();
          setAdded(true);
          setTimeout(() => {
            setAdded(false);
          }, 2000);
        } else {
          setAlreadyAdded(true);
          setTimeout(() => {
            setAlreadyAdded(false);
          }, 2000);
        }
      }
    });
  };

  return (
    <div className=" mt-20 mb-20 w-[800px] image-container">
      <div className="bg-white my-2.5 mx-5 rounded-md shadow-md transition-[0.3s] hover:shadow-lg">
        <a href={hdurl} title="View Full Image" target="_blank" rel="noreferrer">
          <img className="w-full h-auto max-h-[500px] rounded-t-md" src={url} alt="NASA APOD"></img>
        </a>
        {/* Card body */}
        <div className="p-5 space-y-5">
          <h5 className="text-lg font-semibold">{title}</h5>
          <p
            className="text-blue-600 cursor-pointer font-medium hover:text-blue-900"
            onClick={() => storeFavorites(url)}
          >
            Add To Favorites
          </p>
          <p>{explanation}</p>
          <small>
            <strong>{date}</strong>
            <span className="ml-2 font-serif">{copyright}</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
