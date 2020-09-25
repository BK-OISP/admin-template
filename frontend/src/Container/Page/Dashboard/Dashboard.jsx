import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

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
      <Container fluid>
        <Row className="my-4">
          <Col md={8} style={{ padding: "0" }}>
            <div className="ad-tab px-3 py-3">
              <Row className="pb-3">
                <Col style={{ fontWeight: "bold" }}>Table</Col>
              </Row>
              <Table responsive="sm" hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col md={4}>b</Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};
export default Dashboard;
