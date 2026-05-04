import { use } from "react";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";

const cardPromise = fetch("./products.json").then((res) => res.json());

const Cards = ({ cartsProp, setCartsProp }) => {
  const cards = use(cardPromise);
  console.log(cards);

  const addToCart = (tool) => {
    const isExist = cartsProp.find((c) => c.id == tool.id);
    if (isExist) {
      toast.error("Item is already in the cart");
      return;
    }
    setCartsProp([...cartsProp, tool]);
    toast.success("Item added");
  };
  return (
    <div className="grid grid-cols-3 justify-center gap-10 max-w-400 px-50">
      {cards.map((card) => (
        <div className="card w-full shadow-md ">
          <div className="card-body gap-3">
            
           <div className="flex justify-between items-start">
              <div className="bg-white p-3 rounded-2xl border border-gray-100">
                <img src={card.icon} alt={card.name} className="w-10 h-10 object-contain" />
              </div>
              <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                card.tagType === 'best-seller' ? 'bg-orange-100 text-orange-600' : 
                card.tagType === 'popular' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
              }`}>
                {card.tag}
              </span>
            </div>
            
            <div className="text-start flex-row">
              <h2 className="font-bold text-2xl">{card.name}</h2>
              <p className="text-[16px] text-[#627382]">{card.description}</p>
              <p>
                <span className="font-bold text-[24px]">${card.price}</span>/
                {card.period}
              </p>
            </div>

            {card.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-start">
                <TiTick className="text-green-500" />
                <p>{feature}</p>
              </div>
            ))}

            <div className="card-actions">
              <button
                className="btn btn-primary w-full  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl"
                onClick={() => addToCart(card)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
