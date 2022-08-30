import { Row, Col } from "reactstrap";
import LoginLandingPage from "./LoginLandingPage";
import LoginForm from "./LoginForm";

export default function ForgotPassword() {
  return (
    <>
      <div>
        <Row>
          <Col xl="7">
            <LoginLandingPage />
          </Col>
          <Col xl="5">
            <LoginForm type="reset"/>
          </Col>
        </Row>
      </div>
        </>
  );
}
