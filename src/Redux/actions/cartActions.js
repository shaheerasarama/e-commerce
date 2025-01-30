import {
  ADD_TO_CART,
  CLEAR_CART,
  CONFIRM_ORDER,
  REMOVE_FROM_CART,
  SET_ERROR,
  UPDATE_CART,
} from "../types/cartTypes";

export const addToCart = (product, qty, productMinimumOrderQuantity) => {
  return {
    type: ADD_TO_CART,
    payload: { product, qty, productMinimumOrderQuantity },
  };
};

export const updateCart = (product, productQty) => {
  return {
    type: UPDATE_CART,
    payload: { product, productQty },
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { product },
  };
};

export const ConfirmOrder = () => {
  return {
    type: CONFIRM_ORDER,
  };
};

export const clearAll = () => {
  return{
    type : CLEAR_CART,
  }
}

export const setError = () => {
  return {
    type: SET_ERROR,
  };
};
