import { Row, Col } from "reactstrap";
import LoginLandingPage from "./LoginLandingPage";
import LoginForm from "./LoginForm";

export default function LoginComponent() {
  return (
    <>
      <div>
        <Row>
          <Col xl="7">
            <LoginLandingPage />
          </Col>
          <Col xl="5">
            <LoginForm/>
          </Col>
        </Row>
      </div>
        </>
  );
}
