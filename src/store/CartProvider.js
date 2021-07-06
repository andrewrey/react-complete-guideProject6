import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItem = () => {

  };

  const removeItem = () => {
    
  };
  const cartContext = {
    items: [],
    totoalAmount: 0, 
    addItem,
    removeItem

  };
  return <CartContext.Provider value={}>{children}</CartContext.Provider>;
};


export default CartProvider;