import { createContext } from "react";

function calculateTotalPrice(cartList) {
  return cartList
    .map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);
}
export const cartUnit = {
  cartList: [],
};
export const cartReducer = (state, action) => {
  let cartList = [...state.cartList];
  const index = cartList.findIndex((item) => item.id === action.payload.id);
  let total = 0;

  switch (action.type) {
    case "ADD_TO_CART":
      if (index === -1) {
        cartList.push(action.payload);
      } else {
        if (cartList[index].quantity + 1 <= 20) {
          cartList[index].quantity += action.payload.quantity;
          if (cartList[index].quantity > 20) {
            alert("一個餐點 最多 20 盤");
            cartList[index].quantity = 20;
          }
        } else {
          alert("一個餐點 最多 20 盤");
        }
      }

      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      };
    case "CHANGE_CART_QUANTITY":
      cartList[index].quantity = action.payload.quantity;
      total = cartList
        .map((item) => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      };
    case "REMOVE_CART_ITEM":
      cartList.splice(index, 1);
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList),
      };
    default:
      return state;
  }
};

export const Cartcontext = createContext({});
