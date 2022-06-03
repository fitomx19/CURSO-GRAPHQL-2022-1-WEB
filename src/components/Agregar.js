import React, { useState } from "react";


const Agregar = () => {
  return (
    <div className="container">
      <form action="http://localhost:4000/api/mascota" method="POST">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            minLength={4}
            name="nombre"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            min="1"
            max="50"
            name="edad"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Agregar"
            className="form-control btn btn-success"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Agregar;
