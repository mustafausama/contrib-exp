import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Contribution from "./Contrib";
import Review from "./Review";
import axios from "axios";

function Dashbord() {
  const [Contributions, setContributions] = useState([]);
  const getContributions = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setContributions(data);
  };
  useEffect(() => {
    getContributions();
  }, []);

  return (
    <div className="container border border-2 p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Contribution</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Review</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Contribution />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {Contributions && <Review data={Contributions} />}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
export default Dashbord;
