import { useContext, useState } from "react";
import { Cartcontext } from "../assets/store";

export default function Card({ product }) {
  const [qty, setQty] = useState(1);
  const [state, dispath] = useContext(Cartcontext);
  return (
    <div className="card">
      <img src={product.img} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h6 className="card-title">
          {product.title}
          <span className="float-end">NT$ {product.price}</span>
        </h6>
        <div className="row row-cols-2 g-1">
          <div className="col-md-4">
            <select
              className="form-select"
              name=""
              id=""
              value={qty}
              onChange={(e) => {
                e.preventDefault();
                setQty(parseInt(e.target.value));
              }}
            >
              {[...Array(20)].map((_, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-8">
            <button
              href="#"
              className="btn btn-outline-primary w-100"
              onClick={() => {
                dispath({
                  type: "ADD_TO_CART",
                  payload: {
                    ...product,
                    quantity: qty,
                  },
                });
                setQty(1);
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
