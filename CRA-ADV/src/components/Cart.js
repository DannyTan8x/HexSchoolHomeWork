import { useContext } from "react";
import { Cartcontext } from "../assets/store";

export default function Cart() {
  const [state, dispath] = useContext(Cartcontext);
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => {
                      dispath({
                        type: "REMOVE_CART_ITEM",
                        payload: {
                          ...item,
                        },
                      });
                    }}
                  >
                    X
                  </button>
                </td>
                <td>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="table-image"
                  />
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">NT$ {item.price}</small>
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      const quantity = parseInt(e.target.value);
                      dispath({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          ...item,
                          quantity,
                        },
                      });
                    }}
                  >
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="text-end">NT${item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額： NT$ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
