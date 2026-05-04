import React from "react";
import { TiTick } from "react-icons/ti";
const pricingCard = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: "$99/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-[120px]">
      <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {pricingCard.map((card, id) => (
          <div
            key={id}
            className={`hover:shadow-2xl relative p-8 rounded-[32px] shadow-sm flex flex-col justify-between ${
              card.name === "Pro"
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-[#F2F2F2] text-black"
            }`}
          >
            {card.name === "Pro" && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#D97706] px-4 py-1 rounded-full text-sm  font-medium shadow-sm whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className="text-start mb-6">
              <h2 className="text-2xl font-bold">{card.name}</h2>
              <p className={`text-gray-500 mt-2 ${card.name==="Pro" && 'text-white'}`}>{card.desc}</p>
              <p className="text-3xl font-bold mt-4">{card.price}</p>
            </div>

            <div className="space-y-3">
              {card.features.map((feature, id) => (
                <div key={id} className="flex items-center gap-2 text-start">
                  <TiTick className="text-green-500 text-xl" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <button
              className={`cursor-pointer font-bold mt-4 rounded-2xl px-3 py-4 ${card.name === "Pro" ? "bg-white text-purple-900" : " text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] "}`}
            >
              {card.button}
            </button>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
