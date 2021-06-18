import React, { useContext, useReducer, useState, useEffect } from "react";
import { reducer } from "./reducer";
import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  HANDLE_STAR,
  REMOVE_ITEM,
  SET_STORAGE,
} from "./actions";
// const API_ENDPOINT = "https://opentdb.com/api.php?";
const AppContext = React.createContext();

const getLocalStorage = () => {
  const startUp = localStorage.getItem("list");
  if (startUp) {
    return JSON.parse(startUp);
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const initialState = {
    text: "",
    list: getLocalStorage(),
  };

  const setLocalStorage = () => {
    localStorage.setItem("list", JSON.stringify(state.list));
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value) => {
    dispatch({ type: HANDLE_CHANGE, payload: value });
  };

  const handleSubmit = (id) => {
    dispatch({ type: HANDLE_SUBMIT, payload: id });
  };
  const handleStar = (id, stars) => {
    dispatch({
      type: HANDLE_STAR,
      payload: { id, stars },
    });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        handleStar,
        removeItem,
        setLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
