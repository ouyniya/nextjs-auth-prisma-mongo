const WeddingCardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl playpen text-rose-800/50 font-semibold">
          ธีมการ์ดออนไลน์
        </h1>
      </div>

      <div className="grid gap-8">
        {/* Recommend */}
        <div className="grid gap-5 mb-12">
          <h2 className="text-xl playpen font-semibold">Theme แนะนำ</h2>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 border-2 border-rose-300 px-4 py-5 rounded-3xl gap-4">
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
          </div>
        </div>

        {/* basic */}
        <div className="grid gap-5">
          <h2 className="text-xl playpen font-semibold">Basic Theme</h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
          </div>
        </div>

        {/* Standard */}
        <div className="grid gap-5">
          <h2 className="text-xl playpen font-semibold">Standard Theme</h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className="grid gap-5">
          <h2 className="text-xl playpen font-semibold">Premium Theme</h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
            <div className="rounded-2xl w-55 h-70 flex justify-center items-center bg-rose-100">
              test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeddingCardPage;
