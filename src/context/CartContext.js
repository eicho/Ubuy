import { useContext } from "react";
import { createContext } from "react";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  console.log(children);
  const value = {
    total: 200,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
