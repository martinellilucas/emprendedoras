import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.container}>
      <Link className={style.span} to="/">
        <span>Inicio</span>
      </Link>
      <Link className={style.span} to="/form">
        <span>Sumar emprendedora</span>
      </Link>
    </div>
  );
};

export default Nav;
