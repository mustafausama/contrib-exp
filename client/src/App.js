import "./App.css";
import React from "react";
import MetaConnect from "./components/MetaConnect";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <h2 className="mt-4">Openstack ContribXP App</h2>
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <p>
              Contribute to our DAO’s open source repositories to be qualified
              to earn experience points in our quest. <br />
              Other members of the community will review your Pull Request.
              Should it be accepted, your contributions will be rewarded fairly
              based on the experience and reputation power of the reviewers.
            </p>
          </Col>
        </Row>
      </Container>
      <MetaConnect />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
