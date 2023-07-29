import axios from "axios";
export const GET_ALL_NOTES = 'GET_ALL_NOTES'
export const CREATE_NOTE = 'CREATE_NOTE';
export const GET_NOTE_BY_ID = 'GET_NOTE_BY_ID';
export const UPDATE_TITLE_AND_CONTENT = 'UPDATE_TITLE_AND_CONTENT';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_ARCHIVED_STATUS = 'UPDATE_ARCHIVED_STATUS';
export const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const GET_ARCHIVED_NOTES = 'GET_ARCHIVED_NOTES'

export function getAllNotes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/",{
        })
        return dispatch({
            type: GET_ALL_NOTES,
            payload: json.data
        })
    }
}

export function createNote(payload) {
    return async function(dispatch) {
      try {
        const response = await axios.post('http://localhost:3001/', payload);
        dispatch({
          type: 'CREATE_NOTE',
          payload: response.data,
        });
      } catch (error) {
        alert('Post failed');
      }
    };
  }
  


export function getNoteById(id) {
  return async function(dispatch) {
    try {
      // Realizar la solicitud HTTP para obtener los detalles de la nota por su ID
      const response = await axios.get(`http://localhost:3001/notes/${id}`);
      console.log(response.data)
      // Despachar la acción con los datos recibidos en la respuesta
      dispatch({
        type: 'GET_NOTE_BY_ID',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function updateTitleAndContent(id, title, content) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`http://localhost:3001/notes/${id}`, {
        title,
        content,
      });
      dispatch({
        type: 'UPDATE_TITLE_AND_CONTENT',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateArchivedStatus(id, archived) {
  return async function(dispatch) {
    try {
      // Realizar la solicitud HTTP para actualizar el estado de archivado en el backend
      const response = await axios.put(`http://localhost:3001/updateArchived/${id}`, {
        archived,
      });

      // Despachar la acción con los datos actualizados recibidos en la respuesta
      dispatch({
        type: 'UPDATE_ARCHIVED_STATUS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

  export function deleteNote(id) {
    return async function (dispatch) {
      try {
        await axios.delete(`http://localhost:3001/notes/${id}`);
        // Si la eliminación es exitosa, despachamos la acción para eliminar la nota del estado del store de Redux
        dispatch({
          type: 'DELETE_NOTE',
          payload: id, // Pasamos el ID de la nota eliminada como payload
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function archiveNote(id) {
    return async function(dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/archive/${id}`);
        dispatch({
          type: 'ARCHIVE_NOTE',
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function unarchiveNote(id) {
    return async function(dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/unarchive/${id}`);
        dispatch({
          type: 'UNARCHIVE_NOTE',
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }


  ///
  export const getArchivedNotes = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/archived');
        const archivedNotes = response.data;
        dispatch({ type: 'GET_ARCHIVED_NOTES', payload: archivedNotes });
      } catch (error) {
        console.log(error);
      }
    };
  };
  