import { useAuth0 } from "@auth0/auth0-react";
import style from "../Detail/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductos, getUsuario } from "../../redux/actions";
import AgregarProducto from "../AgregarProducto/AgregarProducto";

const Stock = () => {
  const { user, isAuthenticated } = useAuth0();
  const productos = useSelector((state) => state.productos);
  const usuario = useSelector((state) => state.usuario);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUsuario(user?.email));
      dispatch(getProductos(usuario?.id));
    }
  }, []);

  return (
    <div className={style.body}>
      <h1 className={style.title}>Stock</h1>
      <table className={style.tabla}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Color</th>
            <th>Unidades</th>
            <th>Comentario</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos?.map(({ tipo, color, unidades, comentario }) => {
            return (
              <tr>
                <td>{tipo}</td>
                <td>{color}</td>
                <td>{unidades}</td>
                <td>{comentario}</td>
                <td>
                  <button className={style.button}>Actualizar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.botonera}>
        <button className={style.button} onClick={handleClose}>
          Agregar Producto
        </button>
      </div>
      {isOpen && <AgregarProducto handleClose={handleClose} />}
    </div>
  );
};

export default Stock;
