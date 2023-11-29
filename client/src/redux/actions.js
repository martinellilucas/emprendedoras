import axios from "axios";
export const GET_USUARIO = "GET_USUARIO";
export const GET_EMPRENDEDORAS = "GET_EMPRENDEDORAS";
export const GET_EMPRENDEDORA_BY_ID = "GET_EMPRENDEDORAS_BY_ID";
export const ADD_DETAIL = "ADD_DETAIL";
export const GET_COMENTARIOS = "GET_COMENTARIOS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH = "SEARCH";
export const GET_CICLOS = "GET_CICLOS";
export const GET_ALL_CICLOS = "GET_ALL_CICLOS";
const URL = "http://localhost:3001";

export const getAllCiclos = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/ciclos`);
    dispatch({ type: GET_ALL_CICLOS, payload: response.data });
  };
};

export const postUsuario = (usuario) => {
  return async function () {
    await axios.post(`${URL}/usuarios`, usuario).then((res) => {
      return res.data;
    });
  };
};

export const getUsuario = (email) => {
  return async function (dispatch) {
    const response = await axios(`${URL}/usuarios/${email}`);
    dispatch({ type: GET_USUARIO, payload: response.data });
  };
};

export const searchEmprendedora = (nombre) => {
  return function (dispatch) {
    dispatch({ type: SEARCH, payload: nombre });
  };
};

export const postEmprendedora = (id, emprendedora) => {
  return async function () {
    await axios.post(`${URL}/emprendedoras/${id}`, emprendedora).then((res) => {
      return res.data;
    });
  };
};
export const putEmprendedora = (codigoEmprendedora, body) => {
  return async function () {
    await axios.put(`${URL}/emprendedoras/${codigoEmprendedora}`, body);
  };
};
export const postCiclo = (ciclo) => {
  return async function () {
    await axios.post(`${URL}/ciclos`, ciclo).then((res) => {
      return res.data;
    });
  };
};
export const postComentario = (comentario) => {
  return async function () {
    await axios.post(`${URL}/comentarios`, comentario).then((res) => {
      return res.data;
    });
  };
};
export const getEmprendedoras = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/emprendedoras/${id}`);
    dispatch({ type: GET_EMPRENDEDORAS, payload: response.data });
  };
};

export const addDetail = (codigoEmprendedora) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${URL}/emprendedoras/${codigoEmprendedora}`
    );
    dispatch({ type: ADD_DETAIL, payload: response.data });
  };
};
export const getComentarios = (codigoEmprendedora) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${URL}/comentarios/${codigoEmprendedora}`
    );
    dispatch({ type: GET_COMENTARIOS, payload: response.data });
  };
};
export const cleanDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
};
