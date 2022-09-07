import { Card, CardBody, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./userprofile.module.scss";
import { faFax, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavActivity from "./NavActivity";
import NavActivityTabChange from "./NavActivityTabChange";
export default function UserProfile() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div>
        <h1 className={styles.heading}>Profile</h1>
      </div>
      <div>
        <Card className={styles.userInfoCard}>
          <CardBody>
            <Row>
              <Col>
                <img src="/user.jpeg" className={styles.userImage} />
              </Col>

              <Col xl="10" className={` my-3 ${styles.userInfo}`}>
                <div className="my-1">
                  <h1>Lokesh sharma</h1>
                </div>
                <div className="my-1">
                  <h4>Full Stack developer</h4>
                </div>
                <div>
                  <Row>
                    <Col xl="3" xxl="3" md="4" sm="12" xs="12">
                      <FontAwesomeIcon
                        className={styles.userInfoIcon}
                        icon={faFax}
                      />
                      <span>john@sixberries.com</span>
                    </Col>

                    <Col xl="3" xxl="3" md="4" sm="12" xs="12">
                      <FontAwesomeIcon
                        className={styles.userInfoIcon}
                        icon={faMobile}
                      />
                      <span>8128264777</span>
                    </Col>
                    <Col xl="3" xxl="3" md="4" sm="12" xs="12">
                      <FontAwesomeIcon
                        className={styles.userInfoIcon}
                        icon={faPhone}
                      />
                      <span>8128264777</span>
                    </Col>
                  </Row>
                </div>
                <div className="my-5">
                  <Row>
                    <NavActivity
                      setActiveTab={setActiveTab}
                      activeTab={activeTab}
                    />
                  </Row>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <NavActivityTabChange
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
    </>
  );
}
