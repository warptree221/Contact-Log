function DetailsList() {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-white">Alice Adams</p>
        </div>
      </div>

      <p className="self-start my-0 ml-10 text-lg text-white">Details</p>
      <div className="py-0 mx-10 my-0 divider divider-info before:bg-gray-300 after:bg-gray-300"></div>
      <div className="bg-cyan-900 flex justify-between h-fit py-5 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white text-md">Description:</p>
            <p className="text-3xl font-bold text-cyan-600">Officemate</p>
          </div>
        </div>
      </div>
      <div className="bg-cyan-900 flex justify-between h-fit py-5 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white text-md">Contact Number:</p>
            <p className="text-3xl font-bold text-cyan-600">123123123123</p>
          </div>
        </div>
      </div>
      <div className="bg-cyan-900 flex justify-between h-fit py-5 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white text-md">Email Address:</p>
            <p className="text-3xl font-bold text-cyan-600">
              something@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full ">
        <button className="btn btn-error ml-10 w-[10%] mt-4">
          Delete Contact
        </button>
      </div>
    </>
  );
}

export default DetailsList;
