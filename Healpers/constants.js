import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserCircle,
  faIdCard,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
export const HeaderLinks = [
  {
    id: 1,
    name: "Home",
    redirect: "/home",
    icon: faHouse,
  },
  {
    id: 1,
    name: "recent",
    redirect: "/recent",
    icon: faClock,
  },
  {
    id: 1,
    name: "team-member",
    redirect: "/team-member",
    icon: faUserCircle,
  },
  {
    id: 1,
    name: "demo",
    redirect: "/demo",
    icon: faIdCard,
  },
  {
    id: 1,
    name: "Home",
    redirect: "/settings",
    icon: faGear,
  },
];
