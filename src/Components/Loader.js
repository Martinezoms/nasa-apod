import rocketSvg from "../Assets/rocket.svg";

function Loader(loading) {
  return (
    <div className=" bg-inherit h-screen w-screen flex justify-center items-center z-50">
      <img src={rocketSvg} alt="Loading..."></img>
    </div>
  );
}

export default Loader;
