import { createContext } from "react";

//useContext 包裹state跨元件使用
export const MessageContext = createContext({});

//useReducer 統一管理State
export const initState = {
  type: "",
  title: "",
  text: "",
};
export const messageReducer = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGE":
      return { ...action.payload };
    case "CLEAR_MESSAGE":
      return { ...initState };
    default:
      return state;
  }
};

export function handleToastMessage(dispatch, style, title, message) {
  dispatch({
    type: "POST_MESSAGE",
    payload: {
      type: style,
      title: title,
      text: message,
    },
  });
  setTimeout(() => {
    dispatch({
      type: "CLEAR_MESSAGE",
    });
  }, 3000);
}
