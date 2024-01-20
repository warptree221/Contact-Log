import Contact from "../Contact";
import Navbar from "../Navbar";

function AppLayout() {
  return (
    <>
      <button className="btn btn-circle fixed bottom-5 right-5 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#f9fafa"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
      </button>
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
    </>
  );
}

export default AppLayout;
