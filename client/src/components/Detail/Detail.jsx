import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addDetail, cleanDetail } from "../../redux/actions";

import Edit from "../EditEmprendedora/Edit";

const Detail = () => {
  const { emprendedoraDetail } = useSelector((state) => state);
  const { codigoEmprendedora } = useParams();
  const dispatch = useDispatch();

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const toggleEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  useEffect(() => {
    dispatch(addDetail(codigoEmprendedora));

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
            <td>
              <a
                href={`https://api.whatsapp.com/send?phone=${emprendedoraDetail?.tel}`}
              >
                {emprendedoraDetail.tel}
              </a>
            </td>
            <td>
              {emprendedoraDetail.otrasActividades?.map((e) => {
                return <li className={style.itemList}>{e}</li>;
              })}
            </td>
            <td>{emprendedoraDetail.categoria}</td>
          </tr>
        </tbody>
      </table>
      <div className={style.botonera}>
        <button className={style.button} onClick={toggleEdit}>
          Editar
        </button>
        <Link to={`/ciclos/${codigoEmprendedora}`}>
          <button className={style.button}>Ver ciclos</button>
        </Link>
        <Link to={`/comentarios/${codigoEmprendedora}`}>
          <button className={style.button}>Ver Comentarios</button>
        </Link>
      </div>
      {isOpenEdit && (
        <Edit
          codigoEmprendedora={codigoEmprendedora}
          handleClose={toggleEdit}
        />
      )}
    </div>
  );
};

export default Detail;
