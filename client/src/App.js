import { ToastContainer } from "react-toastify";
import "./App.css";
import React from "react";
import MetaConnect from "./components/MetaConnect";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <MetaConnect />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
