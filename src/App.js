import React from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <NewTask/>
    </div>
  );
};

export default App;
