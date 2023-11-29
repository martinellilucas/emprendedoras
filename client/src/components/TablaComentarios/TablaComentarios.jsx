import { useEffect, useState } from "react";
import { getComentarios } from "../../redux/actions";
import style from "../Detail/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import Pagination from "../Pagination/Pagination";

const TablaComentarios = () => {
  const { comentarios } = useSelector((state) => state);
  const { codigoEmprendedora } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [comentariosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalComentarios = comentarios.length;
  const lastIndex = currentPage * comentariosPerPage;
  const firstIndex = lastIndex - comentariosPerPage;
  const sortFunction = (a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return 1;
    }
    return 0;
  };
  const slice = comentarios
    .slice(firstIndex, lastIndex)
    .sort((a, b) => sortFunction(a.createdAt, b.createdAt));

  const dispatch = useDispatch();
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getComentarios(codigoEmprendedora));
  }, [codigoEmprendedora, dispatch]);
  return (
    <div className={style.body}>
      <h1 className={style.title}>Comentarios</h1>
      <Pagination
        emprendedorasPerPage={comentariosPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEmprendedoras={totalComentarios}
      ></Pagination>
      <table className={style.tabla}>
        <thead>
          <th>Autor</th>
          <th>Texto</th>
          <th>Fecha</th>
        </thead>
        <tbody>
          {slice.map((element) => {
            return (
              <tr>
                <td> {element.autor}</td>
                <td> {element.texto}</td>
                <td> {element.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.botonera}>
        <button className={style.button} onClick={togglePopUp}>
          Agregar comentario
        </button>
        <Link to={`/detail/${codigoEmprendedora}`}>
          <button className={style.button}>Volver</button>
        </Link>
      </div>
      {isOpen && (
        <PopUp
          codigoEmprendedora={codigoEmprendedora}
          handleClose={togglePopUp}
        />
      )}
    </div>
  );
};

export default TablaComentarios;
