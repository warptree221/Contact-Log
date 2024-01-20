export default function Contact() {
  return (
    <div className="bg-cyan-900 flex justify-between h-16 w-[95%] px-10">
      <div className="flex gap-5 items-center">
        <div className="rounded-full h-10 w-10 bg-red-300"></div>
        <div className="flex flex-col">
          <p className="text-md">Alice Adams</p>
          <p className="text-sm">Officemate</p>
        </div>
      </div>
      <p className="text-sm">Details</p>
    </div>
  );
}
