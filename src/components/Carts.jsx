import writing from '/src/assets/products/writing.png';

const Carts = ({ cartsProp }) => {
  if (cartsProp.length == 0) {
    return (
      <div>
        <p>Your cart is empty!</p>
      </div>
    );
  }
  return <div className="border rounded-4xl">
    {
        cartsProp.map((c)=>(
             <div key={c.id} >
                <img src={writing} alt="" />
                </div>
        )
           
        )
    }
    </div>;
};

export default Carts;
