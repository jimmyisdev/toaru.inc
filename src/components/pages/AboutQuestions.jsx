import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { questionData } from "./../../data";


export default function AboutQuestions() {
  return (
    <Accordion className="aboutQuestion">
      {questionData.map((item, index) => {
        const { id, question, answer } = item;
        return (
          <Accordion.Item eventKey={index} key={id}>
              <Accordion.Header className="aboutQuestionItemHeader ">
                {question}
              </Accordion.Header>
              <Accordion.Body className="aboutQuestionItemBody ">
                {answer}
              </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}