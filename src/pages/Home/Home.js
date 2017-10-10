import React from 'react';

import NoteContainer from './../../common/components/NoteContainer';
import './MainContainer.css';

const Home = () => (
  <div>
    <div>
      <h1> Floggit Whiteboard Service</h1>
    </div>
    <div className="MainContainer">
      <NoteContainer />
    </div>
  </div>
);

export default Home;
