import React from "react";
import "./App.css";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Button from "react-bootstrap/Button";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
//import { Preview, print } from "react-html2pdf";

import html2pdf from "html2pdf.js/dist/html2pdf.min";
import ReactDOMServer from "react-dom/server";

function App() {
  function handleGeneratePdf() {
    let opt = {
      margin: 0,
      filename: "CV JP-LEDOS.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    //const pdfJSX2 = document.querySelector("#cv-pdf")
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    // New Promise-based usage:
    html2pdf()
      .set(opt)
      .from(printElement)
      .save();
  }

  const pdfJSX2 = () => {
    return (
      <>
        <h1>test de pdf</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          obcaecati nihil tenetur nostrum dicta dolor odit quod quos, pariatur
          saepe atque quis sit iste modi doloribus dolorum quia sint rem.
          Repellendus autem quod eius dolore temporibus ab sed tempora tenetur
          laboriosam. Nulla quisquam repellendus optio cupiditate velit
          consequatur soluta laboriosam provident corrupti ducimus? 
        </p>
      </>
    );
  };

  const pdfJSX = () => {
    return (
      <>
        <div id={"cv-pdf"} className="cv-pdf">
          <Profil />
          <div className="skills-experiences-container">
            <Skills />
            <Experiences />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="app">
        <div id={"cv-pdf"}>
          <Button
            className="pdf-icon"
            variant="success"
            onClick={handleGeneratePdf}
          >
            Export <PictureAsPdfIcon />
          </Button>
          <Profil />
          <div className="skills-experiences-container">
            <Skills />
            <Experiences />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
