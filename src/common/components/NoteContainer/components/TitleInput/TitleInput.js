import React from 'react';

import noteTitleProps from './TitleInput.props';

const TitleInput = (props) => {
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
        placeholder="title"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        add title
      </button>
    </div>
  );
};

TitleInput.propTypes = noteTitleProps;

export default TitleInput;
