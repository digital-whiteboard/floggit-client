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
        props.todos.map(noteContent => (
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
