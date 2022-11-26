import React from "react";
import "../Footer/Footer.css";
import LoFooter from "../../assets/images/footer_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Footer/DarkFooter.css";
import { scrollUp } from "../../functions/funciones";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div
      className="footerConteiner"
      data-aos="zoom-in"
      data-aos-anchor="#example-anchor"
      data-aos-duration="500"
    >
      <div className="contactos">
        <div className="textosContactos">
          <p className="contactanos">Contactanos:</p>
          <p className="dates">Correo: Marzchelo1@gmail.com</p>
          <p className="dates">Telefono: 912093404</p>
          <div className="copyright">UNSM © | Privacy policy</div>
        </div>
      </div>
      <div className="logoFooter">
        <div className="cajaLog">
          <img className="logoFoot" src={LoFooter} alt="logoF" />
          <div className="brandIcons">
            <a
              href="https://www.facebook.com/shandeRount47.ar.9"
              target="blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" className="redes" />
            </a>
            <a href="https://www.instagram.com/alvan_saa/" target="blank">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="redes"
              />
            </a>
            <a href="https://twitter.com/Dh4rio" target="blank">
              <FontAwesomeIcon icon="fa-brands fa-twitter" className="redes" />
            </a>
          </div>
        </div>
      </div>
      <div className="boxScroll">
        <FontAwesomeIcon
          className="scroll"
          icon={faArrowAltCircleUp}
          onClick={scrollUp}
        />
      </div>
    </div>
  );
}

export default Footer;
