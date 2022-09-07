import { Col, Row, TabContent, TabPane } from "reactstrap";
import UserInfoForm from "./PersonalInfo/UserInfoForm";

export default function NavActivityTabChange({ setActiveTab, activeTab }) {
  return (
    <>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          <Row>
            <Col sm="12" className="my-3">
              <h4 className="heading">Personal</h4>
              <UserInfoForm />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={2}>
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={3}>
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
}
