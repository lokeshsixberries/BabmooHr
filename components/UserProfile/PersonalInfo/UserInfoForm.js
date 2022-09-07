import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import styles from "./userInfoForm.module.scss";

export default function UserInfoForm() {
  return (
    <>
      <Row>
        <Col xl="6">
          <div>
            <span>
              <FontAwesomeIcon
                icon={faContactBook}
                className={styles.headingIcon}
              />
              <span className={styles.formTitle}>Basic information</span>
            </span>
          </div>

          <div>
            <FormGroup>
              <Row className="my-2">
                <Col xl="6">
                  <Label>
                    First name<span>*</span>
                  </Label>
                  <Input
                    className={styles.userInputTag}
                    placeholder="Enter First Name"
                  />
                </Col>
                <Col xl="6">
                  <Label>
                    Last name<span>*</span>
                  </Label>
                  <Input
                    className={styles.userInputTag}
                    placeholder="Enter Last Name"
                  />
                </Col>
              </Row>
              <Row className="my-4">
                <Col xl="6">
                  <Label>
                    Birth Date<span>*</span>
                  </Label>
                  <Input
                    type="date"
                    className={styles.userInputTag}
                    placeholder="Enter Birth Date"
                  />
                </Col>
                <Col xl="6">
                  <Label>
                    Gender<span>*</span>
                  </Label>
                  <Input
                    className={styles.userInputTag}
                    placeholder="Enter Your Gender"
                  />
                </Col>
              </Row>
            </FormGroup>
          </div>
        </Col>
        <Col xl="6"></Col>
      </Row>
    </>
  );
}
