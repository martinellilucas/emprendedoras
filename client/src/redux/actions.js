import axios from "axios";

export const GET_EMPRENDEDORAS = "GET_EMPRENDEDORAS";
export const GET_EMPRENDEDORA_BY_ID = "GET_EMPRENDEDORAS_BY_ID";
export const PUT_EMPRENDEDORA = "PUT_EMPRENDEDORA";
export const POST_EMPRENDEDORA = "POST_EMPRENDEDORA";

export const getEmprendedoras = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/emprendedoras");
    dispatch({ type: GET_EMPRENDEDORAS, payload: response.data });
  };
};
