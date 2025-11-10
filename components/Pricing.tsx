const Pricing = () => {
  return (
    <div className="w-full bg-rose-50 flex flex-col gap-16 py-32 px-8 justify-center items-center">
      {/* header */}
      <div className="flex flex-col w-full justify-center items-center gap-1">
        <div className="rounded-full py-1 px-3 text-xs bg-white/50 max-w-max border border-rose-200 text-rose-800/50">
          for you
        </div>
        <h1 className="playpen text-5xl text-center font-bold text-rose-900/40">Packages</h1>
        <p className="opacity-75 mt-4">เลือก package ที่คุณต้องการได้ที่นี่</p>
      </div>

      {/* body */}
      <div className="px-8 w-full grid grid-cols-3 gap-8">
        <div className="bg-white h-[400px]">test</div>
        <div className="bg-white h-[400px]">test</div>
        <div className="bg-white h-[400px]">test</div>
      </div>
    </div>
  );
};
export default Pricing;
