import React from 'react';

import NoteContent from './components/NoteContent';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = (props) => {
  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  const handleUpdate = (id, title, noteList, color) => {
    props.onNoteUpdate(id, title, noteList, color);
  };

  return (
    <ul className="NoteList">
      {
        props.notes.map(noteContent => (
          <NoteContent
            key={noteContent.id}
            id={noteContent.id}
            title={noteContent.title}
            noteList={noteContent.noteList}
            color={noteContent.color}
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
