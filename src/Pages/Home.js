import Card from "../Components/Card";

function Home({ result }) {
  console.log("first =>", result);
  return (
    <div>
      {result.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </div>
  );
}

export default Home;
