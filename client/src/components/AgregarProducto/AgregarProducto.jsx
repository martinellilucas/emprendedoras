import { useEffect, useState } from "react";
import style from "../EditEmprendedora/Edit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseSquare } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsuario, postProducto } from "../../redux/actions";
const AgregarProducto = ({ handleClose }) => {
  const { user, isAuthenticated } = useAuth0();
  const usuario = useSelector((state) => state.usuario);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    tipo: "",
    unidades: "0",
  });
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUsuario(user?.email));
    }
  }, [dispatch, user, usuario, isAuthenticated]);
  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;
    setForm({ ...form, [target]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("El producto fue añadido correctamente");
    dispatch(postProducto(usuario.id, form));
    setForm({
      tipo: "",
      unidades: "0",
    });
  };
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          <AiFillCloseSquare />
        </button>
        <h1 className={style.subTitle}>Agregar Producto</h1>
        <hr className={style.separador} />
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.section}>
            <label className={style.label}>Tipo</label>
            <select
              name="tipo"
              value={form.tipo}
              type="text"
              onChange={handleChange}
              className={style.select}
            >
              <option>Cacerola 18cm</option>
              <option>Cacerola 20cm</option>
              <option>Cacerola 24cm</option>
              <option>Cacerola 28cm</option>
            </select>
          </div>
          <div className={style.section}>
            <label htmlFor="unidades" className={style.label}>
              Unidades
            </label>
            <input
              name="unidades"
              value={form.unidades}
              type="number"
              onChange={handleChange}
              className={style.input}
            ></input>
          </div>
          <button type="submit" className={style.button}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarProducto;
