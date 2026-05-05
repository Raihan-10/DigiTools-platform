const stepsCard = [
  {
    id: 1,
    image: "../src/assets/user.png",
    h2: "Create Account",
    p: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: 2,
    image: "../src/assets/package.png",
    h2: "Choose Products",
    p: "Browse our catalog and select the toolsthat fit your needs.",
  },
  {
    id: 3,
    image: "../src/assets/rocket.png",
    h2: "Start Creating",
    p: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <div className="md:py-20 px-2 py-10 md:px-5 bg-[#F9FAFC] text-center">
      <div className="md:mb-16 mb-3">
        <h2 className="font-extrabold text-3xl md:text-[48px]">
          Get Started in 3 Steps
        </h2>
        <p className="text-[#627382] mt-2 text-[16px]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid  md:grid-cols-3 gap-5 md:gap-10 md:max-w-7xl mx-auto">
        {stepsCard.map((card, id) => (
          <div
            key={id}
            className="rounded-4xl  bg-white shadow-md hover:shadow-2xl  relative p-10 flex flex-col items-center justify-center h-87.5"
          >
            <p className="w-8 h-8 absolute top-4 right-4  flex items-center justify-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white font-bold">
              {card.id}
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-[#f5f3ff] rounded-full flex items-center justify-center">
                <img src={card.image} className="h-12 w-12" alt={card.h2} />
              </div>
              <h3 className="text-[24px] font-bold text-[#111827]">
                {card.h2}
              </h3>
              <p className="text-[#627382] leading-relaxed">{card.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
