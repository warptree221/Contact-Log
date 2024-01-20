import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[10%] flex justify-between items-center mx-10 overflow-hidden">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-error w-[10%]"
      >
        Back
      </button>
    </div>
  );
}

export default Menu;
