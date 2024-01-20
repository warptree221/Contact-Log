import Contact from "../Contact";
import Navbar from "../Navbar";

function AppLayout() {
  return (
    <div className="h-fit bg-cyan-950 py-5 overflow-x-hidden">
      <Navbar />
      <div className="divider mx-10 divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <div className="w-screen flex flex-col gap-3 items-center justify-center">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default AppLayout;
