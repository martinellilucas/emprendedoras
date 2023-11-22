import { GET_EMPRENDEDORAS } from "./actions";

const initialState = {
  emprendedoras: [],
  allEmprendedoras: [],
  emprendedoraDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPRENDEDORAS:
      return {
        ...state,
        emprendedoras: [...action.payload],
        allEmprendedoras: [...action.payload],
      };

    default:
      return { ...state };
  }
};

export default reducer;
