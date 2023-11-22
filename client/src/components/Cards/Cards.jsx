import style from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = ({ emprendedoras }) => {
  return (
    <table className={style.tabla}>
      <thead>
        <tr>
          <th>Cod. Emprendedora</th>
          <th>Nombre</th>
          <th>Ciclo de Alta</th>
          <th>Otras Actividades</th>
          <th>Localidad</th>
          <th>Provincia</th>
          <th>Telefono</th>
          <th>Categoria</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {emprendedoras.map(
          ({
            codigoEmprendedora,
            nombre,
            cicloAlta,
            otrasActividades,
            localidad,
            provincia,
            tel,
            categoria,
          }) => {
            return (
              <tr>
                <td>{codigoEmprendedora}</td>
                <td>{nombre}</td>
                <td>{cicloAlta}</td>
                <td>{otrasActividades}</td>
                <td>{localidad}</td>
                <td>{provincia}</td>
                <td>{tel}</td>
                <td>{categoria}</td>
                <td>
                  <Link to={`/detail/${codigoEmprendedora}`}>
                    <button className={style.button}>Ver Ficha</button>
                  </Link>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default Cards;