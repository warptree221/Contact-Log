import Navbar from "../Navbar";
import DetailsList from "./components/Details";
import Menu from "./components/Menu";

function Details() {
  return (
    <div className="w-full py-5 overflow-x-hidden h-fit bg-cyan-950">
      <Navbar />
      <div className="mx-10 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <Menu />
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <DetailsList />
      </div>
    </div>
  );
}

export default Details;
