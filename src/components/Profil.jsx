import React from "react";
import "./Profil.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

function Profil() {
  return (
    <>
      <div className="header">
        <img
          src="./images/jp-portrait-small.jpg"
          className="user__avatar"
          alt="jp ledos"
        />
        <div className="profil-left">
          <div className="profil-title">
            <h1 className="h1">Jean-Pierre LEDOS</h1>
            <h2 className="h2">Dévelopeur Web Full Stack</h2>
          </div>
        <div className="user-infos">
          <p className="user-info">
            <HomeIcon />7 place du Sycomore <br />
            28230 EPERNON
          </p>
          <p className="user-info">
            <PhoneIcon /> <a href="tel:+33688247701">06 88 24 77 01</a>
          </p>
          <p className="user-info">
            <MailIcon />{" "}
            <a href="mailto:jpledos@gmail.com">jpledos@gmail.com</a>
          </p>
        </div>
      </div>
        </div>
      <div className="profil-detail">
        <h3 className="h3">Profil personnel</h3>
        <div className="profil-description">
          <p>
            Plus de 35 ans d'expérience m'ont donné une vision globale de
            l'entreprise, et particulièrement de la complexité du SAV. J’ai su
            mettre en place les outils qui m’ont permis de rendre le meilleur
            service et à pérenniser les relations avec les constructeurs.
          </p>
          <p>
            En prenant en compte toutes les étapes nécessaires à la bonne
            gestion d’un dossier SAV (logistique enlèvement / livraison,
            intégration des logiciels de transport, remontées d'alerte,
            commandes des pièces détachées, gestion des devis...), J’ai dû
            développer une application métier sous ACCESS VBA à la mesure de nos
            exigences. C’est cette expérience qui m’a conduit à mener une
            reconversion professionnelle vers le métier de développeur.
          </p>
        </div>
      </div>
    </>
  );
}

export default Profil;
