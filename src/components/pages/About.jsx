import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AboutImgs from "./AboutImgs.jsx";
import AboutQuestions from "./AboutQuestions.jsx";
// import { Accordion } from "react-bootstrap/Accordion";

export default function About() {
  return (
    <section className="about">

      <div className="sec_content">
        <AboutImgs />
        <AboutQuestions />
      </div>
    </section>
  );
}
