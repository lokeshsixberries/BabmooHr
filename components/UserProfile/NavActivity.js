import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { useState } from "react";
import styles from "./navActivity.module.scss";
export default function NavActivity({ setActiveTab, activeTab }) {
  return (
    <>
      <div>
        <Nav tabs className={styles.Nav}>
          <NavItem className={styles.NavItems}>
            <NavLink className={styles.NavLink} onClick={() => setActiveTab(1)}>
              Personal
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItems}>
            <NavLink className={styles.NavLink} onClick={() => setActiveTab(2)}>
              Emergency
            </NavLink>
          </NavItem>
          <NavItem className={styles.NavItems}>
            <NavLink className={styles.NavLink} onClick={() => setActiveTab(3)}>
              Documents
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}
