const States = () => {
  return (
    <div className="grid py-10 md:grid-cols-3 justify-center items-center  bg-linear-to-r from-[#4f39f6] to-[#9514fa] md:max-h-61.75  md:gap-40 md:py-15  md:px-50 text-white md:divide-x-2">
      <div>
        <h2 className="font-extrabold text-xl md:text-6xl">50K+</h2>
        <p className="md:text-2xl text-lg">Active Users</p>
        <hr className="h-3 mt-2 md:hidden text-white" />
      </div>
      <div>
        <h2 className="font-extrabold  text-xl md:text-6xl">200+</h2>
        <p className="md:text-2xl text-lg">Premium Tools</p>
        <hr className="h-3 md:hidden mt-2" />
      </div>
      <div>
        <h2 className="font-extrabold text-xl md:text-6xl">4.9</h2>
        <p className="md:text-2xl text-lg">Rating</p>
      </div>
    </div>
  );
};

export default States;
