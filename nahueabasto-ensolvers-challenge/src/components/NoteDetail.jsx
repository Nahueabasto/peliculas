import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitleAndContent, deleteNote } from '../Redux/Actions';
import { useHistory } from 'react-router-dom';

const NoteDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const note = useSelector(state => state.noteDetail); // Buscar la nota en el estado global

  // Estado local para mantener el modo actual (visualización o edición)
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  // Restablecer el estado local cuando noteDetail cambia (cuando se guarda la nota actualizada)
  useEffect(() => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
  }, [note]);

  const handleUpdateNote = () => {
    dispatch(updateTitleAndContent(note.id, editedTitle, editedContent));
    alert('Nota actualizada');
    setEditMode(false); // Salir del modo de edición después de actualizar
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
    alert('Nota eliminada');
    history.push('/');
  };

  return (
    <div className="container mt-5">
      {note && (
        <div className="card">
          <div className="card-header">
            <h1>Note Detail</h1>
          </div>
          <div className="card-body">
            {!editMode ? (
              // Modo de visualización: mostrar título y contenido sin editar
              <>
                <h3 className="card-title">Title: {note.title}</h3>
                <hr />
                <p className="card-text">Content: {note.content}</p>
                <hr />
                <button
                  className="btn btn-primary"
                  style={{ marginRight: '5px' }} // Aplica el margen derecho de 5px
                  onClick={() => setEditMode(true)} // Entrar en modo de edición al hacer clic en "Edit"
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: '5px' }} // Aplica el margen derecho de 5px
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </>
            ) : (
              // Modo de edición: mostrar campos de edición y botones "Save" y "Cancel"
              <form onSubmit={handleUpdateNote}>
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Content:</label>
                  <textarea
                    className="form-control"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginRight: '5px' }} // Aplica el margen derecho de 5px
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginRight: '5px' }} // Aplica el margen derecho de 5px
                  onClick={() => {
                    setEditMode(false); // Salir del modo de edición sin guardar cambios
                  }}
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetail;

