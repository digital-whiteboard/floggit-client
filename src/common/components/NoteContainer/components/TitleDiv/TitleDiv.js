import React from 'react';

import TitleContent from './components/TitleContent';
import TitleDivProps from './TitleDiv.props';

const TitleDiv = (props) => {
  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  const handleUpdate = (id, value) => {
    props.onTitleUpdate(id, value);
  };

  return (
    <div className="TitleDiv">
      {
        this.props.titles.map(titleContent => (
          <TitleContent
            animate
            key={titleContent.id}
            id={titleContent.id}
            value={titleContent.value}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))
      }
    </div>
  );
};


TitleDiv.propTypes = TitleDivProps;

export default TitleDiv;

/*
import React from 'react';

import NoteContent from './components/NoteContent';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = (props) => {
  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  return (
    <ul className="NoteList">
      {
        props.notes.map(noteContent => (
          <NoteContent
            animate
            key={noteContent.id}
            id={noteContent.id}
            value={noteContent.value}
            onRemove={handleRemove}
          />
        ))
      }
    </ul>
  );
};

NoteList.propTypes = noteListProps;

export default NoteList;

*/
