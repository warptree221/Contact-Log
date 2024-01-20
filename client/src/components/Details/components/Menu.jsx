import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[10%] flex justify-between items-center  overflow-hidden">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn ml-10 btn-error w-[10%]"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn mr-10 w-[10%]"
      >
        Edit Contact
      </button>
    </div>
  );
}

export default Menu;
