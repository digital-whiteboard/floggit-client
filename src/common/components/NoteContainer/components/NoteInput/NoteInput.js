import React from 'react';

import noteInputProps from './NoteInput.props';

const NoteInput = (props) => {
  let input;

  const handleClick = () => {
    props.onAdd(input.value);
    input.value = '';
    input.focus();
  };

  const editorMode = () => {
    // TODO
  };

  return (
    <div>
      <input
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="notes"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        add note
      </button>
      <button
        type="button"
        onClick={editorMode}
      >
        edit note
      </button>
    </div>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
