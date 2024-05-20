import { useReducer } from "react";
import { Cartcontext, cartReducer, cartUnit } from "./assets/store";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const reducer = useReducer(cartReducer, cartUnit);
  return (
    <Cartcontext.Provider value={reducer}>
      <Navbar />
      <div className="container mt-4">
        {/* 外層割線 */}
        <div className="row">
          <div className="col-md-7">
            {/* 內層割線 */}
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </Cartcontext.Provider>
  );
}

export default App;
