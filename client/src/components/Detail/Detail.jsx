import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDetail, cleanDetail, getComentarios } from "../../redux/actions";
import PopUp from "../PopUp/PopUp";
import Edit from "../EditEmprendedora/Edit";
const Detail = () => {
  const { emprendedoraDetail, comentarios } = useSelector((state) => state);
  const { codigoEmprendedora } = useParams();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
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
          <h1 className={style.subTitle}>Comentarios</h1>
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
          {comentarios.map((element) => {
            return (
              <ul key={element.id}>
                <li className={style.itemList}>Autor: {element.autor}</li>
                <li className={style.itemList}>Texto: {element.texto}</li>
                <li className={style.itemList}>Fecha: {element.createdAt}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={style.botonera}>
        <button className={style.button} onClick={togglePopUp}>
          Agregar comentario
        </button>
        {isOpen && <PopUp handleClose={togglePopUp} />}
        <button className={style.button} onClick={toggleEdit}>
          Editar
        </button>
        {isOpenEdit && <Edit handleClose={toggleEdit} />}
      </div>
    </div>
  );
};

export default Detail;
