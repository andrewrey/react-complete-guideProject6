import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case "REMOVE":
      const itemToUpdateIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const itemToUpdate = state.items[itemToUpdateIndex];
      const newTotalPrice = state.totalAmount - itemToUpdate.price;
      let itemsUpdated;
      if (itemToUpdate.amount === 1) {
        itemsUpdated = state.items.filter((item) => item.id !== action.id);
      } else {
        const newItemUpdated = {
          ...itemToUpdate,
          amount: itemToUpdate.amount - 1,
        };
        itemsUpdated = [...state.items];
        itemsUpdated[itemToUpdateIndex] = newItemUpdated;
      }
      return { items: itemsUpdated, totalAmount: newTotalPrice };
    default:
      return defaultState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItem = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
