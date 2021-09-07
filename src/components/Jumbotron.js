import React from "react";
import { Jumbotron as Jumbo, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import light from "../assets/images/light.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${light}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    padding: 4rem;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Row>
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit.</p>
        </Row>
      </Container>
    </Jumbo>
  </Styles>
);
