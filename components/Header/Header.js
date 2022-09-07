import { Card, CardBody, Input } from "reactstrap";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { darkTheam, lightTheam } from "../../redux/Slices/TheamSlice";
import styles from "./Header.module.scss";
import { HeaderLinks } from "../../Healpers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);

  const handleTheamChange = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      dispatch(darkTheam());
    } else {
      dispatch(lightTheam());
    }
  }, [isDark]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Card className={styles.sideSmallHeader}>
          <CardBody>
            <div onClick={() => router.push("/profile")}>
              <img src="/headerLogo.png" className={styles.headerLogo} />
            </div>

            <div>
              {(HeaderLinks || []).map((item) => {
                return (
                  <>
                    <div className={styles.headerNavLinkContainer}>
                      <Link href={item.redirect}>
                        <a>
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={styles.headerNavIcon}
                          />
                        </a>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={styles.theamChange}>
              <Switch
                checked={isDark}
                onChange={() => handleTheamChange()}
                className={styles.theamSwitch}
                height={20}
                width={50}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
