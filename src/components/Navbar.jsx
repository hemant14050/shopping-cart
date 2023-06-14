import {BsFillCartFill} from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state)=>state);

  return (
    <div className="">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
          <img src="./logo.png" alt="logo" className="h-14" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          {/* icon */}
          <div className="relative text-2xl">
            <NavLink to="/cart">
              {
                cart.length > 0?
                (
                  <div className="absolute -top-1 -right-2 w-5 h-5  text-sm flex justify-center items-center rounded-full bg-green-500 text-black animate-bounce">
                    {cart.length}
                </div>
                ):(<></>)
              }
              <BsFillCartFill/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
