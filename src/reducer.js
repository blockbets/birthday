import React from "react";
import { useGlobalContext } from "./context";
import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  HANDLE_STAR,
  REMOVE_ITEM,
  INITIAL,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return { ...state, text: action.payload };
    case HANDLE_SUBMIT:
      if (!state.text) {
        return { ...state };
      }
      const id = action.payload;
      const text = state.text;
      const newItem = { text, id, stars: 0 };
      const newList = [...state.list, newItem];
      localStorage.setItem("list", JSON.stringify(newList));

      return { ...state, list: newList, text: "" };
    case HANDLE_STAR:
      const myList = state.list.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.id === action.payload.id) {
          item.stars = action.payload.stars;
        }
        return item;
      });
      localStorage.setItem("list", JSON.stringify(myList));

      return { ...state, list: myList };
    case REMOVE_ITEM:
      const filterItems = state.list.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("list", JSON.stringify(filterItems));

      return { ...state, list: filterItems };
    // case INITIAL:
    //   return { ...state, list: action.payload };

    default:
      console.log("no dispatch type");
  }
  return { ...state };
};
