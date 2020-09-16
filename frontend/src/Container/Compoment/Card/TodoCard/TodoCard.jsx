import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TodoCard = () => {
  return (
    <Col sm={6} md={3} className="counter bg-primary text-center">
      <Row>
        <Col>
          <span class="material-icons">analytics</span>
        </Col>
      </Row>
      <Row>
        <Col>100+</Col>
      </Row>
      <Row>
        <Col>Title</Col>
      </Row>
    </Col>
  );
};
export default TodoCard;
