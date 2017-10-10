import React from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import notesWrapperProps from './NotesWrapper.props';
import './NoteContainer.css';

const NotesWrapper = (props) => {
  const generateList = (notes, handleRemove, handleUpdate) => (
    <NoteList
      notes={notes}
      onNoteRemove={handleRemove}
      onNoteUpdate={handleUpdate}
    />
  );

  const generateLoadingWidget = () => (
    <div> Loading </div>
  );

  return (
    <div className="NoteContainer-wrapper">
      <NoteInput
        onAdd={props.handleAdd}
        onUpdate={props.handleUpdate}
      />
      {
        props.isLoading ?
          generateLoadingWidget() : generateList(props.notes, props.handleRemove,
            props.handleUpdate)}
    </div>
  );
};

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
