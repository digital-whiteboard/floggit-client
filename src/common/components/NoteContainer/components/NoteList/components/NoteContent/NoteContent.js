import React from 'react';

import NoteContentProps from './NoteContent.props.js';

const NoteContent = (props) =>{
  const remove = () =>
  props.onRemove(props.id);
};

const animateClass = props.animate ? 'added-content' : '';
return (
  <li className={`NoteContent-content ${animateClass}`}>
    <div className="NoteContent-value">{props.value}</div>
    <button
      onClick={remove}
    >
    X
    </button>
  </li>
);
};

TodoContent.propTypes = todoContentProps;

export default TodoContent;
