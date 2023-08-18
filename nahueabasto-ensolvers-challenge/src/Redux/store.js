import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); 


export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import notesReducer from './reducers/notesReducer';
// import otherReducer from './reducers/otherReducer';

// const rootReducer = combineReducers({
//   notes: notesReducer, // Aquí usamos el reducer que definiste para las notas
//   other: otherReducer, // Otros reducers para otras partes del estado
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;






