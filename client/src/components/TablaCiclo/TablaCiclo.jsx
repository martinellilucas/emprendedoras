import { useDispatch, useSelector } from "react-redux";
import style from "../Detail/Detail.module.css";
import { addDetail, cleanDetail, getComentarios } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ciclo from "../Ciclos/Ciclo";
import Pagination from "../Pagination/Pagination";

const TablaCiclo = () => {
  const emprendedoraDetail = useSelector((state) => state.emprendedoraDetail);
  const { codigoEmprendedora } = useParams();
  const dispatch = useDispatch();
  const [ciclosPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCiclos = emprendedoraDetail?.Ciclos?.sort((a, b) => {
    return b.ciclo - a.ciclo;
  });
  const lastIndex = currentPage * ciclosPerPage;
  const firstIndex = lastIndex - ciclosPerPage;
  const slice = totalCiclos?.slice(firstIndex, lastIndex);
  const [isOpenCiclo, setIsOpenCiclo] = useState(false);
  const toggleCiclo = () => {
    setIsOpenCiclo(!isOpenCiclo);
  };
  useEffect(() => {
    dispatch(addDetail(codigoEmprendedora));

    return () => {
      dispatch(cleanDetail());
    };
  }, [codigoEmprendedora, dispatch]);
  return (
    <div className={style.body}>
      <h1 className={style.title}>Ciclos</h1>
      <Pagination
        emprendedorasPerPage={ciclosPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEmprendedoras={totalCiclos?.length}
      ></Pagination>
      <table className={style.tabla}>
        <thead>
          <tr>
            <th>Ciclo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {emprendedoraDetail.nombre ? (
            slice?.map(({ ciclo, puntos }) => {
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
      <div className={style.botonera}>
        <button className={style.button} onClick={toggleCiclo}>
          Agregar ciclo
        </button>
        <Link to={`/detail/${codigoEmprendedora}`}>
          <button className={style.button}>Volver</button>
        </Link>
      </div>
      {isOpenCiclo && (
        <Ciclo
          codigoEmprendedora={codigoEmprendedora}
          handleClose={toggleCiclo}
        />
      )}
    </div>
  );
};

export default TablaCiclo;
