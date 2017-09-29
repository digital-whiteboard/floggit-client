import React from 'react';

import InputNotesProps from './InputNotes.props';

const InputNotes = (props) => {
  let input;

  const handleClick = () => {
    props.onAdd(input.value);
    input.value = '';
    input.focus();
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
    </div>
  );
};

InputNotes.propTypes = InputNotesProps;

export default InputNotes;
