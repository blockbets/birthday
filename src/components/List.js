import React from "react";
import { Item } from "./Item";
import { useGlobalContext } from "../context";

export const List = () => {
  const { list } = useGlobalContext();
  return (
    <div className="presents--container">
      {list.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};
