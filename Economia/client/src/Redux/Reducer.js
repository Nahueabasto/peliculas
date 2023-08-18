import { GET_DOLAR } from "./Actions";

const initialState = {
    dolar: [],
}

function reducer (state = initialState, action) {
switch (action.type) {
    case GET_DOLAR:
        return{
            ...state,
            dolar: action.payload,

        };

        default:
        return state
      }}

      export default reducer;