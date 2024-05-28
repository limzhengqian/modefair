export default function LocalNavbar() {
  return (
    <>
      <div className=" bg-customGrey flex justify-center w-full font-sans">
        <nav className="bg-customGrey ml-3 mr-3 h-[50px] container w-[975px] flex justify-between  items-center">
          <div className="font-medium text-[22px] tracking-tight">MacBook Pro</div>
          <div className="flex gap-x-6">
            <div className="text-[13px] text-slate-600 tracking-tight">Overview</div>
            <div className="text-[13px] text-slate-600 tracking-tight">macOS</div>
            <div className="text-[13px] text-slate-600 tracking-tight">Compare</div>
          </div>
        </nav>
      </div>
    </>
  );
}
