import Link from "next/link";
import { useContext, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import CartContext from "../store/Cart-Context";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <div className="w-full h-12 lg:h-16 bg-gray-600 sticky top-0 z-50">
      <div className="container flex flex-row justify-around items-center px-4 lg:px-0 lg:mx-auto">
        <div className="hidden lg:flex-1 lg:flex flex-row justify-start text-white text-lg">
          <div className="flex items-center text-white text-lg">
            <BsTruck className="inline-block text-4xl text-yellow-300 mr-2" />
            <span className="text-md">Free Shipping</span>
          </div>
          <div className="flex items-center text-white text-lg pl-4">
            <GiPresent className="inline-block text-4xl text-yellow-300 mr-2" />
            <span>Special Offer</span>
          </div>
        </div>

        <Link href="/">
          <a className="flex-1 text-white text-4xl text-left lg:text-center  font-bold">
            AUNG
          </a>
        </Link>

        <div className="flex-1 flex justify-end text-white text-lg">
          <div className="flex items-center text-white text-lg">
            <BsPerson className="inline-block text-4xl text-yellow-300 mr-2" />
            <span className="hidden lg:inline text-sm">Sign in Or Join</span>
          </div>

          <div
            className="flex items-center text-white text-lg pl-4 cursor-pointer"
            onClick={showCartHandler}
          >
            <GiShoppingCart className="inline-block text-4xl text-yellow-300 pr-2" />

            <div className="flex flex-col">
              <span className="text-yellow-300 font-bold text-2xl">
                {numberOfCartItems}
              </span>
              <span className="hidden lg:inline text-sm">Cart</span>
            </div>
          </div>
        </div>
      </div>
      {showCart && (
        <Cart showCartHandler={showCartHandler} className="right-0 bottom-44" />
      )}
    </div>
  );
};

export default Navbar;
