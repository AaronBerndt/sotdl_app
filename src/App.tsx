import React from "react";
import Tabbar from "./components/Tabbar";
import TabObject from "./components/TabObject";
function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Tabbar tabs={TabObject} />
    </div>
  );
}

export default App;
