import user from "../assets/user.png";

const Steps = () => {
  return (
    <div className="flex items-center justify-center bg-[#F9FAFC]">
      <div className="mt-[120px] mb-[200px]">
        <div>
          <h2 className="font-extrabold text-[48px]">Get Started in 3 Steps</h2>
          <p className="text-[#627382] text-[16px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="bg-white max-w[380px] relative">
          <p className="w-[25px] h-[25px] absolute  right-2.5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-center text-white">
            01
          </p>
          <div className="text-center items-center justify-center flex flex-col">
            <img src={user} className="h-[99px] w-[100px] bg-purple-100 rounded-[50%] " alt="" />
            <h3 className="text-[24px] font-bold">Create Account</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
