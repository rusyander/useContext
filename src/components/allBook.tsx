import React, { useContext } from "react";
import Context from "../context";

export default function AllBook(props: any) {
  const contextValue = useContext(Context);
  return (
    <div>
      <h1>Всего книг: {contextValue.counter}</h1>
    </div>
  );
}
