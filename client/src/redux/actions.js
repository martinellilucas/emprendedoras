import axios from "axios";

export const GET_EMPRENDEDORAS = "GET_EMPRENDEDORAS";
export const GET_EMPRENDEDORA_BY_ID = "GET_EMPRENDEDORAS_BY_ID";
export const ADD_DETAIL = "ADD_DETAIL";
export const GET_COMENTARIOS = "GET_COMENTARIOS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH = "SEARCH";
export const GET_CICLOS = "GET_CICLOS";

export const searchEmprendedora = (nombre) => {
  return function (dispatch) {
    dispatch({ type: SEARCH, payload: nombre });
  };
};

export const postEmprendedora = (emprendedora) => {
  return async function () {
    await axios
      .post("http://localhost:3001/emprendedoras", emprendedora)
      .then((res) => {
        return res.data;
      });
  };
};
export const putEmprendedora = (codigoEmprendedora, body) => {
  return async function () {
    await axios.put(
      `http://localhost:3001/emprendedoras/${codigoEmprendedora}`,
      body
    );
  };
};
export const postCiclo = (ciclo) => {
  return async function () {
    await axios.post(`http://localhost:3001/ciclos`, ciclo).then((res) => {
      return res.data;
    });
  };
};
export const postComentario = (comentario) => {
  return async function () {
    await axios
      .post(`http://localhost:3001/comentarios`, comentario)
      .then((res) => {
        return res.data;
      });
  };
};
export const getEmprendedoras = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/emprendedoras");
    dispatch({ type: GET_EMPRENDEDORAS, payload: response.data });
  };
};

export const addDetail = (codigoEmprendedora) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/emprendedoras/${codigoEmprendedora}`
    );
    dispatch({ type: ADD_DETAIL, payload: response.data });
  };
};
export const getComentarios = (codigoEmprendedora) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/comentarios/${codigoEmprendedora}`
    );
    dispatch({ type: GET_COMENTARIOS, payload: response.data });
  };
};
export const cleanDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
};

export const getCiclos = (codigoEmprendedora) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/ciclos/${codigoEmprendedora}`
    );
    dispatch({ type: GET_CICLOS, payload: response.data });
  };
};
