import Navbar from "../Navbar";
import DetailsList from "./components/Details";
import Menu from "./components/Menu";

function Details() {
  return (
    <div className="h-fit bg-cyan-950 py-5 overflow-x-hidden w-full">
      <Navbar />
      <div className="divider mx-10 divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <Menu />
      <div className="w-screen h-full flex flex-col gap-3 items-center justify-center">
        <DetailsList />
      </div>
    </div>
  );
}

export default Details;
