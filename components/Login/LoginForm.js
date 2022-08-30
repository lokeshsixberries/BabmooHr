import { FormGroup, Input, Label, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Styles from "./loginPage.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LoginForm({ type }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className={Styles.formBody}>
        <div className={Styles.companyLogoContainer}>
          <img
            src="/logo.png"
            className={Styles.companyLogo}
            alt="companyLogo"
          />
        </div>

        {type !== "reset" ? (
          <div className={Styles.formContainer}>
            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <Label for="exampleEmail" className={Styles.inputLabel}>
                  Email
                </Label>
                <Input
                  className={Styles.loginInputField}
                  placeholder="Enter your email"
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <Label for="exampleEmail" className={Styles.inputLabel}>
                  Password
                </Label>

                <div className="passwordInputContainer">
                  <Input
                    className={Styles.loginInputField}
                    placeholder="Enter your Password"
                    type={!showPassword ? "text" : "password"}
                  />
                </div>
              </FormGroup>
            </Row>

            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <Link href="/forgot-password">
                  <a
                    className={Styles.inputLabel}
                    style={{ color: "#982a8e", float: "right" }}
                  >
                    Forgot your password?
                  </a>
                </Link>
              </FormGroup>
            </Row>

            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <div className={Styles.loginBtnContainer}>
                  <button className={Styles.loginBtn}>Login</button>
                </div>
              </FormGroup>
            </Row>
          </div>
        ) : (
          <div className={Styles.formContainer}>
            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <Label for="exampleEmail" className={Styles.inputLabel}>
                  Email
                </Label>
                <Input
                  className={Styles.loginInputField}
                  placeholder="Enter your email"
                />
                <Label
                  className={Styles.inputLabel}
                  style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}
                >
                  An email would be sent to your regitered email address to
                  change your password
                </Label>
              </FormGroup>
            </Row>

            <Row>
              <FormGroup className={Styles.loginFiledContainer}>
                <div className={Styles.loginBtnContainer}>
                  <button className={Styles.loginBtn}>Send Link</button>
                </div>
              </FormGroup>
            </Row>
          </div>
        )}
      </div>
    </>
  );
}
