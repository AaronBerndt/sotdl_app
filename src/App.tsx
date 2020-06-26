import React from "react";
import Tabbar from "./components/Tabbar";
import TabObject from "./components/TabObject";
import Router from "./pages";
function App() {
  return (
    <div className="App">
      <Tabbar tabs={TabObject} />
      <Router />
    </div>
  );
}

export default App;
