import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import notesWrapperProps from './NotesWrapper.props';
import './NoteContainer.css';

const NotesWrapper = props => (
  <div className="NoteContainer-wrapper">
    <NoteInput onAdd={props.handleAdd} />
    <NoteList
      notes={props.notes}
      onNoteRemove={props.handleRemove}
      onNoteUpdate={props.handleUpdate}
    />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
