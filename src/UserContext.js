import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {};

function reducer(state, action) {
  return { ...state, ...action };
}

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
