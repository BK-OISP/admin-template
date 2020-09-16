import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import AdminLayout from "../../Layout/AdminLayout";
import TodoCard from "../../Compoment/Card/TodoCard/TodoCard";

const Dashboard = (props) => {
  return (
    <AdminLayout>
      <Container fluid>
        <Row className="d-flex" noGutters={false}>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </Row>
      </Container>
    </AdminLayout>
  );
};
export default Dashboard;
