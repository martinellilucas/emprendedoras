import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDetail, cleanDetail, getComentarios } from "../../redux/actions";
import PopUp from "../PopUp/PopUp";
import Edit from "../EditEmprendedora/Edit";
import Ciclo from "../Ciclos/Ciclo";
const Detail = () => {
  const { emprendedoraDetail, comentarios } = useSelector((state) => state);
  const { codigoEmprendedora } = useParams();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenCiclo, setIsOpenCiclo] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  const toggleCiclo = () => {
    setIsOpenCiclo(!isOpenCiclo);
  };
  const toggleEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  useEffect(() => {
    dispatch(addDetail(codigoEmprendedora));
    dispatch(getComentarios(codigoEmprendedora));
    return () => {
      dispatch(cleanDetail());
    };
  }, [codigoEmprendedora, dispatch]);
  return (
    <div className={style.body}>
      <h1 className={style.title}>{emprendedoraDetail?.nombre}</h1>
      <div className={style.table}>
        <div className={style.columna}>
          <h1 className={style.subTitle}>Codigo de Emprendedora</h1>
          <h1 className={style.subTitle}>Ciclo de Alta</h1>
          <h1 className={style.subTitle}>Localidad</h1>
          <h1 className={style.subTitle}>Provincia</h1>
          <h1 className={style.subTitle}>Teléfono</h1>
          <h1 className={style.subTitle}>Actividades Extras</h1>
          <h1 className={style.subTitle}>Categoria de emprendedora</h1>
        </div>
        <hr />
        <div className={style.columna}>
          <h1 className={style.dato}>
            {emprendedoraDetail.codigoEmprendedora}
          </h1>
          <h1 className={style.dato}>{emprendedoraDetail.cicloAlta}</h1>
          <h1 className={style.dato}>{emprendedoraDetail.localidad}</h1>
          <h1 className={style.dato}>{emprendedoraDetail.provincia}</h1>
          <h1 className={style.dato}>{emprendedoraDetail.tel}</h1>
          {emprendedoraDetail.otrasActividades?.map((e) => {
            return <li className={style.itemList}>{e}</li>;
          })}
          <h1 className={style.dato}>{emprendedoraDetail.categoria}</h1>
        </div>
      </div>
      <button className={style.button} onClick={toggleEdit}>
        Editar
      </button>
      {isOpenEdit && <Edit handleClose={toggleEdit} />}

      <h1 className={style.subTitle}>Comentarios</h1>
      <hr className={style.separador} />
      {comentarios?.map((element) => {
        return (
          <ul key={element.id}>
            <li className={style.itemList}>Autor: {element.autor}</li>
            <li className={style.itemList}>Texto: {element.texto}</li>
            <li className={style.itemList}>Fecha: {element.createdAt}</li>
          </ul>
        );
      })}

      <button className={style.button} onClick={togglePopUp}>
        Agregar comentario
      </button>
      {isOpen && <PopUp handleClose={togglePopUp} />}
      <h1 className={style.subTitle}>Ciclos</h1>
      <hr className={style.separador} />
      <table className={style.tabla}>
        <thead>
          <tr>
            <th>Ciclo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {emprendedoraDetail.nombre ? (
            emprendedoraDetail?.Ciclos.map(({ ciclo, puntos }) => {
              return (
                <tr key={ciclo}>
                  <td>{ciclo}</td>
                  <td>{puntos}</td>
                </tr>
              );
            })
          ) : (
            <h1 className={style.subTitle}>Cargando..</h1>
          )}
        </tbody>
      </table>
      <button className={style.button} onClick={toggleCiclo}>
        Agregar ciclo
      </button>
      {isOpenCiclo && <Ciclo handleClose={toggleCiclo} />}
    </div>
  );
};

export default Detail;
