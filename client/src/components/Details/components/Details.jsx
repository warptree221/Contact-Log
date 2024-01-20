function DetailsList() {
  return (
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
  );
}

export default DetailsList;
