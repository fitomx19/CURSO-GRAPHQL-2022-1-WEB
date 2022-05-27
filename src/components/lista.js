import React, { useState, useEffect } from "react";
import axios from "axios";
//import graphql from 'graphql'
//import gql from 'graphql-tag'

const Lista = () => {
  const [list, setList] = useState();

  useEffect(() => {
    var url2 =
      "http://localhost:4000/graphl?query=query%7B%0A%20%20mascotas%7B%0A%20%20%20%20_id%0A%20%20%20%20nombre%0A%20%20%20%20edad%0A%20%20%7D%0A%7D";
    axios
      .get(url2)
      .then((result) => {
        let datos = result.data.data;
        setList(datos);
        console.log(datos);
      })
      .catch((err) => console.log(err));
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
                      <b>ID:</b> {m._id} | <b>Nombre:</b> {m.nombre} |{" "}
                      <b>Edad:</b> {m.edad}
                    </p>
                  </div>
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
