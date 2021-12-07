import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import Image from "next/image";
import ProductForm from "./ProductForm";

const SingleProduct = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className="relative flex items-center flex-col" key={props.id}>
      <Image
        src={props.img}
        alt={props.name}
        width={250}
        height={250}
        className="rounded-md"
      />
      <div className="flex flex-row justify-between w-full pb-4 pt-4">
        <div className="flex flex-col flex-1 pl-2">
          <h1 className="font-bold text-xl">{props.name}</h1>
          <p className="font-bold text-xl">$ {props.price}</p>
        </div>
        <ProductForm AddToCart={onAddToCartHandler} />
      </div>
    </div>
  );
};

export default SingleProduct;
