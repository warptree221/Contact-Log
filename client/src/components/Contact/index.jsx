export default function Contact() {
  return (
    <div className="bg-cyan-900 flex justify-between h-16 w-[93%] px-6 hover:bg-cyan-800 hover:scale-[1.01] hover:shadow-slate-400 transition-all">
      <div className="flex gap-5 items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-md font-bold text-white">Alice Adams</p>
          <p className="text-sm">Officemate</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-sm font-bold text-white hover:text-cyan-400">
          Details
        </button>
      </div>
    </div>
  );
}
