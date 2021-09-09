import { createContext, useContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)[0];
export const useDispatch = () => useContext(StoreContext)[1];

export default StoreProvider;
