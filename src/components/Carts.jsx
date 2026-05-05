import { toast } from "react-toastify";
import cart from '../assets/products/shopping-cart.png';


const Carts = ({ cartsProp,setCartsProp }) => {
    const total = cartsProp.reduce((sum,cart)=> sum+cart.price,0)
    const remove=(id)=>{
      const filterCart = cartsProp.filter(cart=> cart.id!=id)
      setCartsProp(filterCart)

    }
  if (cartsProp.length == 0) {
    return (
      <div className="bg-base-200 w h-[200px] text-center flex flex-col gap-10 items-center justify-center container mx-auto">
        <img src={cart} className="w-15 bg-white rounded-2xl p-3" alt="" />
        <p className="text-2xl">Your cart is empty!</p>
      </div>
    );
  }
  const checkOut = ()=>{
  toast.success('You have successfully purchased')
  setCartsProp([])

  }
  return (
    <div className="max-w-400 px-50">

    <div className="border rounded-4xl flex flex-col p-3  ">
      {cartsProp.map((c) => ( 
        <div key={c.id} className="w-full  bg-[#F9FAFC] flex justify-between p-5 mb-2">
          <div className="flex p-3 gap-3">
            <img className="rounded object-contain w-9 h-9" src={c.icon} alt="" />
            <div className="text-start w-full">
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <p className="font-medium text-[16px] text-[#627382]">${c.price}</p>
            </div>
          </div>
          <button onClick={()=> remove(c.id)} className="btn btn-error text-white hover:bg-red-500 ">Remove</button>
        </div>
      ))}
      <div className="flex justify-between p-3">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <button onClick={checkOut} className=" btn p-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white">Proceed to Checkout</button>
    </div>
      </div>
  );
};

export default Carts;
