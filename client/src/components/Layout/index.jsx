import Navbar from "../Navbar";

function AppLayout() {
  return (
    <div className="h-full bg-cyan-950">
      <Navbar />
      <div className="divider mx-10 divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <div className="w-screen ">
        <p>Hi</p>
      </div>
    </div>
  );
}

export default AppLayout;
