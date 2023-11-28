import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { getUsuario, postUsuario } from "../../redux/actions";

const Nav = () => {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();
  const { usuario } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(postUsuario(user));
      dispatch(getUsuario(user?.email));
    }
  }, [user, dispatch]);

  return (
    <div className={style.container}>
      <Link className={style.span} to="/">
        <span>Inicio</span>
      </Link>
      {isAuthenticated && (
        <Link className={style.span} to="/form">
          <span>Sumar emprendedora</span>
        </Link>
      )}
      <div className={style.login}>
        <FaUser color="white" />
        {!isAuthenticated ? (
          <button className={style.button} onClick={loginWithPopup}>
            {" "}
            Login
          </button>
        ) : (
          <span>{usuario?.picture}</span>
        )}
      </div>
    </div>
  );
};

export default Nav;
