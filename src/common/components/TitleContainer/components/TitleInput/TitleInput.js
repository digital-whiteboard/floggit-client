import React from 'react';

import titleInputProps from './TitleInput.props';

const TitleInput = (props) => {
  let input;

  const handleClick = () => {
    props.onAdd(input.value);
    input.value = '';
    input.focus();
  };

  const EditorMode = () => {

  };

  return (
    <div>
      <input
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="title"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        add title
      </button>
      <button
        type="button"
        onClick={EditorMode}
      >
      *
      </button>
    </div>
  );
};

TitleInput.propTypes = titleInputProps;

export default TitleInput;
