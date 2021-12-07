import { useContext } from "react";
import CartContext from "../store/Cart-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 1;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <div className="grid grid-flow-row grid-cols-2 gap-12 pb-4">
          <h1 className="text-yellow-600 font-bold">{item.name}</h1>
          <div className="">
            <span className="">$ {item.price}</span>
            <span className="pl-2">x {item.amount}</span>
          </div>
        </div>
      ))}
    </ul>
  );
  return (
    <div className="w-72 h-80 flex ml-auto mt-4 flex-col items-center justify-around bg-white rounded-lg p-4 ">
      {cartItems}
      {!hasItem && (
        <p className="text-yellow-600 font-bold">No order here...</p>
      )}

      <div className="grid grid-flow-row grid-cols-2 gap-12 border-t-2">
        <span className="text-yellow-600 font-bold">Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="">
        <button
          className="bg-yellow-600 rounded-lg py-2 px-4 text-white mr-4"
          onClick={props.showCartHandler}
        >
          Close
        </button>
        {hasItem && (
          <button className="bg-yellow-600 rounded-lg py-2 px-4 text-white">
            Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
