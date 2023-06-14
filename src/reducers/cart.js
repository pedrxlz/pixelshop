export const cart = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "CLOSE_CART":
      return { ...state, isCartOpen: action.isCartOpen };
    case "ADD_PRODUCT":
      if (state.products.find((product) => product._id === action.product._id))
        return state;

      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.product._id
        ),
      };
    default:
      return state;
  }
};
