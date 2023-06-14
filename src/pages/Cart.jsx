import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    setTotalAmount(cart.reduce((accum, curr) => accum+curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[1200px] mx-auto flex lg:flex-col md:flex-row justify-center">
      {
        cart.length > 0 ?
        (
          <div className="flex lg:flex-row flex-col">
            <div className="w-[100%]  flex flex-col p-2 sm:w-full md:w-full">
              {
                cart.map((item, index) => {
                  return (
                    <CartItem key={item.id} item={item} itemIndex = {index} />
                  )
                })
              }
            </div>

            <div className="w-[100%] mt-5  flex lg:flex-col sm:w-full md:w-full">
              <div className="flex flex-col p-5 gap-5 my-14  lg:h-[100%]  md:h-[100%]  justify-between">
                <div className="flex flex-col gap-5 ">
                  <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                  <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">Total Items: </span>{cart.length}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount: </span>${totalAmount.toFixed(2)}</p>
                  <button
                  className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ):
        (<div className="min-h-[80vh] flex flex-col items-center justify-center">
          <div>
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Cart Empty!</h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
          </div>
        </div>)
      }
    </div>
  );
};

export default Cart;
