import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { getEmprendedoras, searchEmprendedora } from "../../redux/actions";
import { FaSearch } from "react-icons/fa";
const Home = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { emprendedoras } = useSelector((state) => state);
  const [emprendedorasPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const totalEmprendedoras = emprendedoras.length;
  const lastIndex = currentPage * emprendedorasPerPage;
  const firstIndex = lastIndex - emprendedorasPerPage;

  const handleClick = () => {
    setCurrentPage(1);
    dispatch(searchEmprendedora(search));
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    dispatch(getEmprendedoras());
  }, [dispatch]);
  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>Emprendedoras</h1>
        <div className={style.searchBar}>
          <input
            className={style.input}
            placeholder="Buscar por nombre"
            type="search"
            value={search}
            onChange={handleChange}
          ></input>
          <button onClick={handleClick} className={style.button}>
            <FaSearch />
          </button>
        </div>
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
