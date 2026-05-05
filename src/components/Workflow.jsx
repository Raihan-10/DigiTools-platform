const Workflow = () => {
  return (
    <div className="text-center md:px-50 md:py-30 bg-linear-to-r from-[#4f39f6] to-[#9514fa]  text-white space-y-6 md:space-y-10 p-5">
      <div className="">
        <h2 className="font-extrabold text-3xl md:text-[40px] mb-3">
          Ready to Transform Your Workflow?
        </h2>
        <p className="md:leading-6 opacity-90">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
      </div>
      <div className="font-semibold flex flex-col md:flex-row  justify-center gap-3  space-x-2 md:space-x-3">
        <button className="btn rounded-4xl bg-white  text-purple-400">
          Explore Products
        </button>
        <button className="btn rounded-4xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
          View Pricing
        </button>
      </div>
      <p className="md:leading-5">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Workflow;
