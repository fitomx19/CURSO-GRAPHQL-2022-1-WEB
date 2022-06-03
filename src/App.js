import "./App.css";
import Header from "../src/components/header";
import Lista from "../src/components/lista";
import React, { useState } from "react";
import Agregar from "./components/Agregar";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <div class="pt-2 text-center">
        <Header />
      </div>
      <div>
        {
          !visible ? <button className="btn btn-primary"  onClick={() => setVisible(true)}> Agregar una Mascota</button> : null
        }
        {visible ? <><Agregar/></> : null}
        </div>
      <div className="container">
        <Lista />
      </div>
    </>
  );
}

export default App;
