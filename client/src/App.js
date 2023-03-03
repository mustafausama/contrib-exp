import "./App.css";
import React from "react";
import MetaConnect from "./components/MetaConnect";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <h2 className="mt-4">Openstack ContribXP App</h2>
        <p>
          Contribute to our DAO’s open source repositories to be qualified to
          earn experience points in our quest. Other members of the community
          will review your Pull Request. Should it be accepted, your
          contributions will be rewarded fairly based on the experience and
          reputation power of the reviewers.
        </p>
      </Container>
      <MetaConnect />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
