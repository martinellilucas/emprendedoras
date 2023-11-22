import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { getEmprendedoras } from "../../redux/actions";

const Home = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { emprendedoras } = useSelector((state) => state);
  const [emprendedorasPerPage] = useState(10);
  const totalEmprendedoras = emprendedoras.length;
  const lastIndex = currentPage * emprendedorasPerPage;
  const firstIndex = lastIndex - emprendedorasPerPage;

  useEffect(() => {
    dispatch(getEmprendedoras());
  }, [dispatch]);
  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>Emprendedoras</h1>
        <input
          className={style.input}
          placeholder="Buscar por codigo de emprendedora"
        ></input>
      </div>
      <hr className={style.separador} />
      <Pagination
        emprendedorasPerPage={emprendedorasPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalEmprendedoras={totalEmprendedoras}
      />
      {emprendedoras.length ? (
        <Cards
          emprendedoras={emprendedoras.slice(firstIndex, lastIndex)}
        ></Cards>
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
