import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../Redux/Actions';
import { useHistory } from "react-router-dom";

const CreateNote = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(createNote({ title, content }));
      setTitle('');
      setContent('');
    }
    history.push('/');
  };

  return (
    <div className="container mt-5">
  <h1>Create New Note</h1>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="content">Content:</label>
      <textarea
        className="form-control"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="btn btn-primary"
      style={{ marginRight: '5px' }} // Agrega el margen derecho de 5px
    >
      Save
    </button>
    <button
      type="button"
      className="btn btn-danger"
      style={{ marginRight: '5px' }} // Agrega el margen derecho de 5px
    >
      Delete
    </button>
  </form>
</div>
  );
};

export default CreateNote;

