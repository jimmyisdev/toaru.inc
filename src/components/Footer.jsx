import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { SiLinkedin, SiFacebook, SiYoutubetv } from "react-icons/si";
import Logo from "./Logo";


export default function Footer() {
    return (
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col>
              <ul className="item_row">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin className="iconItem" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.Facebook.com"
                    rel="noopener noreferrer"
                  >
                    <SiFacebook className="iconItem" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com"
                    rel="noopener noreferrer"
                  >
                    <SiYoutubetv className="iconItem" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <span>Subscribe Us on SNS</span>
            </Col>
          </Row>

          <Row>
            <Col>
              <span>
                <Logo style={{ width: "25%", height: "25%" }} />
                All rights reserved by Toaru inc. 2021{" "}
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
