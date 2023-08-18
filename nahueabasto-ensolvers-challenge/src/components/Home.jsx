import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from '../Redux/Actions';
import "./Home.css";
import Notess from './Notes';

const Home = () => {
const dispatch = useDispatch();
const notes = useSelector(state => state.notes);

   useEffect(() => {
     dispatch(getAllNotes());
   }, [dispatch]);

  return (
    <div>
<header class="text-center">
    <h1 class="display-4 fw-bold">My Notes</h1>
    <nav class="d-flex justify-content-center">
        <a href="/CreateNote" class="btn btn-primary mr-2">Create Note</a>
        <a href="/ArchivedNotes" class="btn btn-secondary">Notes Archived</a>
    </nav>
</header>
      <div className='card-home'>
        <Notess />
      </div>
    </div>
  );
};

export default Home;



