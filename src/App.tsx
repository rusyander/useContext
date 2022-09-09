import react, { useState } from "react";
import AllBook from "./components/allBook";
import BuyBook from "./components/buyBook";
import Context from "./context";

function App() {
  const [counter, setCounter] = useState(0);
  const addCounter = (counterBook: any) => {
    setCounter(counter + counterBook);
  };

  const contextValue = {
    counter,
    addCounter,
  };
  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <h1>UseContext</h1>
        <AllBook />
        <BuyBook />
      </div>
    </Context.Provider>
  );
}

export default App;
