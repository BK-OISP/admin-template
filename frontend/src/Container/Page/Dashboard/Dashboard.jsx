import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import AdminLayout from "../../Layout/AdminLayout";
import TodoCard from "../../Compoment/Card/TodoCard/TodoCard";

const Dashboard = (props) => {
  return (
    <AdminLayout>
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <TodoCard type="primary" icon="analytics" header="100+" text="Todo" />
          <TodoCard type="success" icon="analytics" header="100+" text="Todo" />
          <TodoCard type="danger" icon="analytics" header="100+" text="Todo" />
          <TodoCard type="warning" icon="analytics" header="100+" text="Todo" />
        </Row>
      </Container>
    </AdminLayout>
  );
};
export default Dashboard;
