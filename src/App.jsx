import Header from "./header/Header";
import { Container, Row, Col } from "reactstrap";
import Map from "./map/Map";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="2">
            <p> SIDE BAR HERE</p>
          </Col>
          <Col md="10">
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
