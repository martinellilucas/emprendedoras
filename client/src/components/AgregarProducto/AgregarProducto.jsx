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
    tipo: "Jarro Quick",
    color: "",
    unidades: "0",
    comentario: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUsuario(user?.email));
    }
  }, []);
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
      tipo: "Jarro Quick",
      color: "",
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
              <option>Jarro Quick</option>
              <option>Sarten express</option>
              <option>Sarten 24cm</option>
              <option>Sarten 28cm</option>
              <option>Cacerola 18cm</option>
              <option>Cacerola 24cm</option>
              <option>Cacerola 28cm</option>
              <option>Cuadrada 29cm</option>
              <option>Bifera</option>
              <option>Flip 2.1</option>
              <option>Rectangular 30cm</option>
              <option>Wok</option>
              <option>Nuit Cacerola 24cm</option>
              <option>Nuit Cacerola 28cm</option>
              <option>Nuit Sarten 24cm</option>
              <option>Nuit Sarten 28cm</option>
              <option>Urban Grill</option>
              <option>Disco</option>
              <option>Grill Multifuncion</option>
              <option>Set Disco</option>
              <option>Sarten 24cm Amor Canino</option>
              <option>Savarin 18cm</option>
              <option>Savarin 24cm</option>
              <option>Savarin 28cm</option>
              <option>Budineras x2</option>
            </select>
          </div>
          <div>
            <label htmlFor="color" className={style.label}>
              Color
            </label>
            <select
              name="color"
              value={form.color}
              type="text"
              onChange={handleChange}
              className={style.select}
            >
              <option></option>
              <option>Aqua</option>
              <option>Terra</option>
              <option>Fuego</option>
              <option>Cherry</option>
              <option>Rosa</option>
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
          <div className={style.section}>
            <label htmlFor="comentario" className={style.label}>
              Comentario
            </label>
            <input
              name="comentario"
              className={style.input}
              type="text"
              onChange={handleChange}
              value={form.comentario}
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
