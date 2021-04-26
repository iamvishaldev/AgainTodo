import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container vh-100 vw-100">
      <div className="mystyle vh-100">
        <Todo />
      </div>
    </div>
  );
}

export default App;
