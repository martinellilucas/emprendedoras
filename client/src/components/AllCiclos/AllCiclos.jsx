import { useEffect, useState } from "react";
import style from "../Detail/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCiclos } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

const AllCiclos = () => {
  const ciclos = useSelector((state) => state.ciclos);
  const dispatch = useDispatch();
  const [ciclosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCiclos = ciclos?.length;
  const lastIndex = currentPage * ciclosPerPage;
  const firstIndex = lastIndex - ciclosPerPage;
  const slice = ciclos.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getAllCiclos());
  }, [dispatch]);
  return (
    <div className={style.body}>
      <Pagination
        emprendedorasPerPage={ciclosPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEmprendedoras={totalCiclos}
      ></Pagination>
      <table className={style.tabla}>
        <thead>
          <tr>
            <th>Emprendedora</th>
            <th>Cod. Emprendedora</th>
            <th>Ciclo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {slice?.map((ciclo) => {
            return (
              <tr>
                <td>{ciclo?.Emprendedoras[0].nombre}</td>
                <td>{ciclo?.Emprendedoras[0].codigoEmprendedora}</td>
                <td>{ciclo.ciclo}</td>
                <td>{ciclo.puntos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AllCiclos;
