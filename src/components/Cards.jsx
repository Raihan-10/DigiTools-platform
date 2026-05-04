import { use } from "react";

const cardPromise = fetch("./products.json").then((res) => res.json());

const Cards = ({ cartsProp, setCartsProp }) => {
  const cards = use(cardPromise);
  console.log(cards);

  const addToCart = (tool) => {
    const isExist = cartsProp.find(c => c.id==tool.id);
    if(isExist){
        alert("Item is already in the cart")
        return;
    }
    setCartsProp([...cartsProp,tool]);
  };
  return (
    <div className="grid grid-cols-3 justify-center max-w-400 px-50">
      {cards.map((card) => (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={()=> addToCart(card)}
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
