import {
  ADD_DETAIL,
  CLEAN_DETAIL,
  GET_ALL_CICLOS,
  GET_COMENTARIOS,
  GET_EMPRENDEDORAS,
  GET_USUARIO,
  SEARCH,
} from "./actions";

const initialState = {
  usuario: {},
  emprendedoras: [],
  allEmprendedoras: [],
  emprendedoraDetail: {},
  comentarios: [],
  ciclos: [],
  allCiclos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CICLOS:
      return {
        ...state,
        ciclos: [...action.payload],
        allCiclos: [...action.payload],
      };
    case GET_USUARIO:
      return { ...state, usuario: { ...action.payload } };
    case GET_EMPRENDEDORAS:
      return {
        ...state,
        emprendedoras: [...action.payload],
        allEmprendedoras: [...action.payload],
      };
    case CLEAN_DETAIL:
      return { ...state, emprendedoraDetail: {}, comentarios: [] };
    case ADD_DETAIL:
      return { ...state, emprendedoraDetail: { ...action.payload } };
    case GET_COMENTARIOS:
      return { ...state, comentarios: [...action.payload] };
    case SEARCH:
      return {
        ...state,
        allEmprendedoras: [...state.emprendedoras],
        emprendedoras: [
          ...state.allEmprendedoras.filter((emprendedora) =>
            emprendedora.nombre
              .toUpperCase()
              .startsWith(action.payload.toUpperCase())
          ),
        ],
      };
    default:
      return { ...state };
  }
};

export default reducer;
