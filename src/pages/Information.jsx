import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoChamp } from "../functions/funciones";
import { imageChampApi, passiveApi, spellApi } from "../config/riotapi";
import "../styles/Information.css";

function Information() {
  const [datos, setDatos] = useState("");

  const params = useParams();
  useEffect(() => {
    unicoChamp(params.id, setDatos);
  }, []);

  const champInfo = Object.values(datos);

  return (
    <div>
      {champInfo.map((x) => (
        <div key={x.id} className="info">
          <div key={x.id} className="cardChamp">
            <div className="cont">
              <div className="fot" data-aos="zoom-in">
                <img
                  className="fotChamp"
                  src={`${imageChampApi}/${x.id}_0.jpg`}
                  alt={x.id}
                />
              </div>
              <div className="dates">
                <div className="boxTitle">
                  <p className="title" data-aos="zoom-in">
                    {x.name} - {x.title}
                  </p>
                </div>
                <div className="spells">
                  <div className="pass" data-aos="flip-right">
                    <img
                      className="passive"
                      src={`${passiveApi}/${x.passive.image.full}`}
                      alt="Passive"
                    />
                    <div>
                      <a className="spn">{x.passive.name}</a>
                    </div>
                  </div>
                  <div className="caja" data-aos="flip-right">
                    <img
                      className="hab"
                      src={`${spellApi}/${x.spells[0].image.full}`}
                      alt="Spells"
                    />
                    <div>
                      <a className="spn">{x.spells[0].name}</a>
                    </div>
                  </div>
                  <div className="caja" data-aos="flip-right">
                    <img
                      className="hab"
                      id="W"
                      src={`${spellApi}/${x.spells[1].image.full}`}
                      alt="Spells"
                    />
                    <div>
                      <a className="spn">{x.spells[1].name}</a>
                    </div>
                  </div>
                  <div className="caja" data-aos="flip-right">
                    <img
                      className="hab"
                      id="E"
                      src={`${spellApi}/${x.spells[2].image.full}`}
                      alt="Spells"
                    />
                    <div>
                      <a className="spn">{x.spells[2].name}</a>
                    </div>
                  </div>
                  <div className="caja" data-aos="flip-right">
                    <img
                      className="hab"
                      id="R"
                      src={`${spellApi}/${x.spells[3].image.full}`}
                      alt="Spells"
                    />
                    <div>
                      <a className="spn">{x.spells[3].name}</a>
                    </div>
                  </div>
                </div>
                <div className="lore" data-aos="fade-up">
                  <p className="loreTitle">Champion's Lore:</p>
                  <p className="loreChamp">{x.lore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Information;
