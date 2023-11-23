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
      <table className={style.tabla}>
        <thead>
          <tr>
            <th>Codigo de Emprendedora</th>
            <th>Ciclo de Alta</th>
            <th>Localidad</th>
            <th>Provincia</th>
            <th>Teléfono</th>
            <th>Actividades Extras</th>
            <th>Categoria de emprendedora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{emprendedoraDetail.codigoEmprendedora}</td>
            <td>{emprendedoraDetail.cicloAlta}</td>
            <td>{emprendedoraDetail.localidad}</td>
            <td>{emprendedoraDetail.provincia}</td>
            <td>{emprendedoraDetail.tel}</td>
            <td>
              {emprendedoraDetail.otrasActividades?.map((e) => {
                return <li className={style.itemList}>{e}</li>;
              })}
            </td>
            <td>{emprendedoraDetail.categoria}</td>
          </tr>
        </tbody>
      </table>
      <button className={style.button} onClick={toggleEdit}>
        Editar
      </button>
      {isOpenEdit && (
        <Edit
          codigoEmprendedora={codigoEmprendedora}
          handleClose={toggleEdit}
        />
      )}

      <h1 className={style.title}>Ciclos</h1>

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
      {isOpenCiclo && (
        <Ciclo
          codigoEmprendedora={codigoEmprendedora}
          handleClose={toggleCiclo}
        />
      )}
      <h1 className={style.title}>Comentarios</h1>
      <table className={style.tabla}>
        <thead>
          <th>Autor</th>
          <th>Texto</th>
          <th>Fecha</th>
        </thead>
        <tbody>
          {comentarios?.map((element) => {
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

      <button className={style.button} onClick={togglePopUp}>
        Agregar comentario
      </button>
      {isOpen && (
        <PopUp
          codigoEmprendedora={codigoEmprendedora}
          handleClose={togglePopUp}
        />
      )}
    </div>
  );
};

export default Detail;
