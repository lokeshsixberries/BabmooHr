import { useState } from "react";
import { useSelector } from "react-redux";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Col, Row } from "reactstrap";
import styles from "./myprofile.module.scss";
export default function ProfileHeader() {
  const theam = useSelector((state) => state.theams.value);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card className={styles.profileHeader} style={theam}>
        <CardBody>
          <div>
            <Row>
              <Col>
                {/* <FontAwesomeIcon icon={faBell} color="red" /> */}
              </Col>
              <Col></Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
