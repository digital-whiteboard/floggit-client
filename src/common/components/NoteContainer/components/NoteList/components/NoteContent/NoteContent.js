import React from 'react';

import noteContentProps from './NoteContent.props';
import './NoteContent.css';

const NoteContent = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };

  const update = () => {
    props.onUpdate(props.id, props.value);
  };

  const animateClass = props.animate ? 'added-content' : '';
  return (
    <li className={`NoteContent-content ${animateClass}`}>
      <div className="NoteContent-value">{props.value}</div>
      <button onClick={update} > E </button>
      <button onClick={remove} > X </button>
    </li>
  );
};

NoteContent.propTypes = noteContentProps;

export default NoteContent;
