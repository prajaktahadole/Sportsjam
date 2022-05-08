const init = {
    isLoggedIn: false,
    user: {},
    
  };
  
  export const loginReducer = (store = init, { type, payload }) => {
    switch (type) {
      case "LOGIN":
        return { isLoggedIn: true, user: payload };
      case "LOGOUT":
        return { isLoggedIn: false, user: {} };
      default:
        return store;
    }
  };

export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    }
  
    if (action.type === "CLEAR_CART") {
      return { ...state, item: [] };
    }
  
    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };