import {
  ADD_TO_CART,
  CLEAR_CART,
  CONFIRM_ORDER,
  REMOVE_FROM_CART,
  SET_ERROR,
  UPDATE_CART,
} from "../types/cartTypes";

const initialState = {
  cartItems: localStorage.getItem("userCart")
    ? JSON.parse(localStorage.getItem("userCart"))
    : [],
  qtyError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newCartProducts;
      if (state.cartItems.length === 0) {
        newCartProducts = [
          ...state.cartItems,
          { product: action.payload.product, qty: action.payload.qty },
        ];
      } else {
        let duplicatedProduct = state.cartItems.find(
          (prod) => prod.product.id === action.payload.product.id
        );
        if (!duplicatedProduct) {
          newCartProducts = [
            ...state.cartItems,
            { product: action.payload.product, qty: action.payload.qty },
          ];
        } else {
          if (
            duplicatedProduct.qty + action.payload.qty >
            action.payload.productMinimumOrderQuantity
          ) {
            return { ...state, cartItems: state.cartItems, qtyError: true };
          } else {
            let updateProduct = state.cartItems.map((prod) =>
              prod.product.id === action.payload.product.id
                ? { ...prod, qty: prod.qty + action.payload.qty }
                : prod
            );
            newCartProducts = updateProduct;
          }
        }
      }
      localStorage.setItem("userCart", JSON.stringify(newCartProducts));
      return { ...state, cartItems: newCartProducts };

    case UPDATE_CART:
      let updatedProduct = state.cartItems.findIndex(
        (cart) => cart.product.id === action.payload.product.id
      );
      if (updatedProduct !== -1) {
        let updateProduct = state.cartItems.map((prod) =>
          prod.product.id === action.payload.product.id
            ? {
                ...prod,
                qty: prod.qty + (action.payload.productQty - prod.qty),
              }
            : prod
        );
        localStorage.setItem("userCart", JSON.stringify(updateProduct));
        return { ...state, cartItems: updateProduct };
      } else {
        console.log("error");
        return state;
      }
    case REMOVE_FROM_CART:
      const updatedCart = state.cartItems.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id
      );
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return { ...state, cartItems: updatedCart };
    case CONFIRM_ORDER:
      localStorage.removeItem("userCart");
      return { ...state, cartItems: [] };
    case CLEAR_CART:
      localStorage.removeItem("userCart");
      return { ...state, cartItems: [] };
    case SET_ERROR:
      return { ...state, qtyError: false };
    default:
      return state;
  }
};
export default cartReducer;
