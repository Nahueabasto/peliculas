import {
    GET_ALL_NOTES,
    CREATE_NOTE,
    GET_NOTE_BY_ID,
    UPDATE_TITLE_AND_CONTENT,
    DELETE_NOTE,
    UPDATE_ARCHIVED_STATUS,
    UNARCHIVE_NOTE,
    ARCHIVE_NOTE,
    GET_ARCHIVED_NOTES,
  } from './Actions';
  
  // Estado inicial
  const initialState = {
    notes: [], // Array para almacenar las notas
    noteDetail: [], // Variable para almacenar los detalles de una nota por su ID
    archivedNotes: [],
  };
  
  // Reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_NOTES:
        return {
          ...state,
          notes: action.payload, // Actualizamos el array de notas con los datos recibidos en la acción
        };
      case CREATE_NOTE:
        return {
          ...state,
         notes: [...state.notes, action.payload], // Agregamos la nueva nota creada al array de notas
        };
      case GET_NOTE_BY_ID:
        return {
          ...state,
          noteDetail: action.payload, // Actualizamos la variable de detalles de nota con los datos recibidos en la acción
        };
        case UPDATE_TITLE_AND_CONTENT:
          return {
            ...state,
        notes: state.notes.map(note => 
          note.id === action.payload.id ? 
          { ...note, title: action.payload.title, content: action.payload.content } : 
          note
        ),
        noteDetail: state.noteDetail && state.noteDetail.id === action.payload.id ? 
          { ...state.noteDetail, title: action.payload.title, content: action.payload.content } : 
          state.noteDetail,
      };

          case UPDATE_ARCHIVED_STATUS:
            const updatedNote = state.notes.find(note => note.id === action.payload);
      if (updatedNote) {
        return {
          ...state,
          notes: state.notes.filter(note => note.id !== action.payload),
          archivedNotes: [...state.archivedNotes, updatedNote],
        };
      } else {
        return state; // Si la nota no está en el estado notes, no hacemos ningún cambio
      }
      case 'DELETE_NOTE':
      const noteIdToDelete = action.payload;
      const isInNotes = state.notes.some((note) => note.id === noteIdToDelete);
      const isInArchivedNotes = state.archivedNotes.some((note) => note.id === noteIdToDelete);

      if (isInNotes) {
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== noteIdToDelete),
        };
      } else if (isInArchivedNotes) {
        return {
          ...state,
          archivedNotes: state.archivedNotes.filter((note) => note.id !== noteIdToDelete),
        };
      }

      // Si no se encuentra la nota ni en 'notes' ni en 'archivedNotes', devolvemos el estado tal como está
      return state;


        case UNARCHIVE_NOTE:
          const unarchivedNote = action.payload;
  return {
    ...state,
    archivedNotes: state.archivedNotes.filter(note => note.id !== unarchivedNote.id),
    notes: [...state.notes, unarchivedNote],
  };

      case ARCHIVE_NOTE:
        const archivedNote = action.payload;
        return {
          ...state,
          notes: state.notes.filter(note => note.id !== archivedNote.id),
          archivedNotes: [...state.archivedNotes, archivedNote],
        };

        case GET_ARCHIVED_NOTES: // Manejamos la acción para obtener las notas archivadas
      return { ...state, 
        archivedNotes: action.payload 
      };
      default:
        return state;
    }
    
  };
  
  export default reducer;
  