import { useRef, useState } from "react";

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }
    props.AddToCart(enteredAmountNumber);
  };

  return (
    <form
      className="flex-1 flex flex-col justify-between items-center relative"
      onClick={submitHandler}
    >
      <input
        ref={amountInputRef}
        label="Amount"
        id="number"
        type="number"
        min="1"
        max=""
        defaultValue="1"
        step="1"
        className="w-10 font-bold text-center"
      />
      <button className="cursor-pointer py-1 px-4 bg-yellow-600 rounded-lg text-white text-sm">
        ADD TO CART
      </button>
      {/* {!amountIsValid && (
        <p className="absolute bg-white bottom-20 p-4 transition duration-500 ">
          Please enter amount between 1 and 11.
        </p>
      )} */}
    </form>
  );
};

export default ProductForm;
