import React, { useEffect, useState } from "react";
import { allPersonajes } from "../../functions/funciones";
import { imageChampApi } from "../../config/riotapi";
import "./Body.css";
import "./DarkInput.css";
import { useNavigate } from "react-router-dom";

function Body() {
  //Llamado de API
  const [personajes, setPersonajes] = useState("");

  useEffect(() => {
    allPersonajes(setPersonajes);
  }, []);

  const characters = Object.values(personajes);

  //Busqueda
  const [perSearch, setPerSearch] = useState("");
  useEffect(() => {
    allPersonajes(setPerSearch);
  }, []);

  const search = Object.values(perSearch);

  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    //setBusqueda(Datos de entrada)
    filtrar(e.target.value);
    //filtrar(Datos de entrada)
  };

  const filtrar = (terminoBusqueda) => {
    var results = search.filter((x) => {
      if (
          x.name
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())
      ) {
        return x;
      }
    });
    setPersonajes(results);
  };

  //Navegacion
  const alone = useNavigate();

  return (
    <div className="cajaPadre">
      <div className="form" data-aos="zoom-in">
        <input
          className="controlBuscador"
          value={busqueda}
          onChange={handleChange}
          placeholder="CHAMPS"
        />
      </div>
      <div className="cuerpo">
        {characters.map((x) => (
          <div key={x.id} className="conteiner">
            <div
              key={x.id}
              className="card"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              <div className="foto">
                <img
                  loading="lazy"
                  src={`${imageChampApi}/${x.id}_0.jpg`}
                  alt={x.id}
                />
              </div>
              <div className="name">
                <p className="textName">{x.name}</p>
              </div>
              <div className="tags">
                <p>|</p>
                <p>{x.tags[0]}</p>
                <p>|</p>
              </div>
              <div className="bot">
                <button
                  key={x.id}
                  className="boton"
                  onClick={() => alone(`/lolPage/information/${x.id}`)}
                >
                  i
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;

//  Estructura principal
//
// <div className="cajaPadre">
//
//       <div className="form">
//         <input/>
//       </div>
//
//       <div className="cuerpo">
//
//         {Recorrido de la API => (
//           <div className="conteiner">
//             <div>
//
//               <div className="foto">
//                 <img/>
//               </div>
//
//               <div className="name">
//                 <p className="textName">Nombre</p>
//               </div>
//
//               <div className="tags">
//                 <p>|</p>
//                 <p>Tag</p>
//                 <p>|</p>
//               </div>
//
//               <div className="bot">
//                 <button>i</button>
//               </div>
//
//             </div>
//           </div>
//         ))}
//
//       </div>
//
// </div> 
