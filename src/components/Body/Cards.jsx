import React, { useEffect, useState } from "react";
import { allPersonajes } from "../../functions/funciones";
import { imageChampApi } from "../../config/riotapi";
import "./Cards.css";
import "./DarkInput.css";
import { useNavigate } from "react-router-dom";

function Cards() {
  //Llamado de API
  const [personajes, setPersonajes] = useState("");

  useEffect(() => {
    allPersonajes(setPersonajes);
  }, []);
  //Llamado de API

  //Navegacion
  const alone = useNavigate();
  //Navegacion

  //Busqueda
  const [perSearch, setPerSearch] = useState("");
  useEffect(() => {
    allPersonajes(setPerSearch);
  }, []);

  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  //Busqueda

  const filtrar = (terminoBusqueda) => {
    var results = Object.values(perSearch).filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setPersonajes(results);
  };
  //BusquedaFin

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
        {Object.values(personajes).map((x) => (
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

export default Cards;
