import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);
export const UserContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <UserContext.Provider  value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
