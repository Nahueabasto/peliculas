import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArchivedNotes, deleteNote, getNoteById, unarchiveNote } from '../Redux/Actions';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ArchivedNote = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allNotes = useSelector(state => state.archivedNotes);

  useEffect(() => {
    // Fetch all notes, including archived ones
    dispatch(getArchivedNotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    alert("Nota eliminada");
    history.push('/ArchivedNotes');
  };

  const handleClick = (id) => {
    dispatch(getNoteById(id))
    history.push(`/note/${id}`);
  };

  const handleUnarchive = (id) => {
    dispatch(unarchiveNote(id, false));
  };


  // const archivedNotes = allNotes.filter(note => note.archived);

  return (
<div>
  <header>
    <h1 className="display-4 text-center">Notes Archived</h1>
    <Link to="/" href="/ArchivedNotes" className="btn btn-secondary" style={{ marginRight: '5px' }}>My Notes</Link>
  </header>
  <div className='card-home'>
    <div className="row">
      {allNotes.map(note => (
        <div key={note.id} className="col-md-4 mb-4">
          <div className="card" onClick={() => handleClick(note.id)}>
            <div className="card-body">
              <h3 className="card-title">Title: {note.title}</h3>
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
                    handleUnarchive(note.id);
                  }}
                >
                  Unarchive
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ArchivedNote;



