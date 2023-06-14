import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="">
      <nav className="bg-slate-900 sticky w-full z-10 top-0">
        <Navbar/>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;
