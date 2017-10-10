import React from 'react';

import NoteContent from './components/NoteContent';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = (props) => {
  let input;

  const isNotVisible = {
    display: 'show',
  };

  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  const handleUpdate = (id) => {
    props.onNoteUpdate(id, input.value);
  };

  return (
    <ul className="NoteList">
      <input
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="update note"
        style={isNotVisible}
      />
      {
        props.notes.map(noteContent => (
          <NoteContent
            animate
            key={noteContent.id}
            id={noteContent.id}
            value={noteContent.value}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))
      }
    </ul>
  );
};

NoteList.propTypes = noteListProps;

export default NoteList;
