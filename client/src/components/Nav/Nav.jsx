import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <span>Inicio</span>
      </Link>
      <Link to="/form">
        <span>Sumar emprendedora</span>
      </Link>
    </div>
  );
};

export default Nav;
