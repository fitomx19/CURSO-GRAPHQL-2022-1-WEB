import React, { useState, useEffect } from "react";
import axios from "axios";
//import graphql from 'graphql'
//import gql from 'graphql-tag'

const Lista = () => {
  const [list, setList] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //url de nuestro servidor graphql
    var url2 = "http://localhost:4000/graphl";
    axios(url2, {
      method: "post",
      data: {
        query: `
                query{
                    mascotas{
                      _id
                      nombre
                      edad
                      propietario
                    }
                  }
                `,
      },
    })
      .then((result) => {
        let datos = result.data.data;
        //agregamos lista al state
        setList(datos);
        console.log(datos);
      })
      //manejo de errores
      .catch((err) => console.log(err.message));
  }, [setList]);

  return (
    <>
      <h3 className="">Lista de mascotas</h3>
      <ul>
        {list
          ? list.mascotas.map((m) => {
              return (
                <li>
                  <div className="shadow-lg p-3 mb-5 text-white bg-success rounded py-2">
                    <p id={m._id}>
                      <b>ID:</b> {m._id} | <b>Nombre:</b> {m.nombre} | {m.edad} años
                    </p>
                    <button
                      className="btn btn-info"
                      onClick={() => setVisible(true)}
                    >
                      Editar
                    </button>
                    <div>
                      <form action="http://localhost:4000/api/eliminar" method="POST">
                          <input type="hidden" value={m._id} name="id"></input>
                          <input type="submit" value="Eliminar" className="btn btn-danger">
                            
                          </input>
                      </form>
                    </div>
                  </div>
                  {visible ? (
                    <form
                      action="http://localhost:4000/api/editar"
                      method="POST"
                    >
                      <div className="form-group">
                        <label>Nombre</label>
                        <input type="hidden" name="id" value={m._id}></input>
                        <input
                          type="text"
                          name="nombre"
                          className="form-control"
                        ></input>
                        <label>Edad</label>
                        <input
                          type="number"
                          name="edad"
                          className="form-control"
                        ></input>
                        <div className="pt-2">
                          <input
                            type="submit"
                            className="btn btn-outline-success"
                          ></input>
                        </div>
                      </div>
                    </form>
                  ) : null}
                </li>
              );
            })
          : null}
      </ul>
      <br />
    </>
  );
};

export default Lista;
