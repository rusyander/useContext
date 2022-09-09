import React, { useContext } from "react";
import Context from "../context";

export default function Action(props: any) {
  const contextValue = useContext(Context);
  return (
    <div>
      <button
        onClick={() => contextValue.addCounter(props.count)}
        className="btns"
      >
        Купить {props.count} книг
      </button>
    </div>
  );
}
