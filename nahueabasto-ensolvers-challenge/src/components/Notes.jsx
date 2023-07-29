import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes, deleteNote, getNoteById, archiveNote } from '../Redux/Actions';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Notas.css"

const Notess = (id) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector(state => state.notes);
  //const archivedNotes = useSelector(state => state.archivedNotes);
  
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    alert("Nota eliminada");
    history.push('/');
  };

  const handleClick = (id) => {
    dispatch(getNoteById(id))
    history.push(`/note/${id}`);
  };

  const handleArchive = (id) => {
    dispatch(archiveNote(id, true));
  };
  //const unarchivedNotes = notes.filter(note => !note.archived);

  return (
    <div>   
    <div className="row">
      {notes.map(note => (
        <div key={note.id} className="col-md-4 mb-4">
          <div className="card" onClick={() => handleClick(note.id)}>
            <div className="card-body">
              <h3 className="card-title">Title: {note.title}</h3> {/* Aquí se aplica la clase */}
              <div>
                <button className="btn btn-primary" style={{ marginRight: '5px' }}>see</button>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: '5px' }} // Agrega el margen derecho de 5px
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(note.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  style={{ marginRight: '5px' }} // Agrega el margen derecho de 5px
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArchive(note.id);
                  }}
                >
                  Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

    
  );
};


export default Notess;

