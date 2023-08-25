import axios from "axios";
export const GET_DOLAR = 'GET_DOLAR';


export function getDolar(){
    return async function(dispatch){
        var json = await axios.get("/dolar",{
        })
        return dispatch({
            type: GET_DOLAR,
            payload: json.data
        })
    }
}