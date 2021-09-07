import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .w {
    padding-top: 5rem;
  }
`;
export const Contact = () => {
  return (
    <Styles>
      <div className="w">
        <Container>
          <Row>
            <div className="display-2">Contact Us</div>
          </Row>
        </Container>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Styles>
  );
};
