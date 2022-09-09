import React, { createContext } from "react";

const Context = createContext({
  counter: 0,
  addCounter: (value: number) => {},
});

export default Context;
