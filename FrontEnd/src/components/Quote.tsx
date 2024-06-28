const Quote = () => {
  return (
    <div className="bg-slate-200 flex justify-center flex-col h-screen p-4">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            "The ramen was so good that tears came into my eyes. They were made
            exactly like Ichiraku ramen and took me in the past for a moment"
          </div>
          <div>
            <div className="text-xl  max-w-xs font-semibold mt-4">
              Naruto Uzumaki
            </div>
            <div className="  max-w-xs text-sm font-light text-slate-400">
              Hokage | Ramen Group
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
