import React from 'react';

import titleContentProps from './TitleContent.props';
import './TitleContent.css';

const TitleContent = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };
  const update = () => {
    props.onUpdate(props.id, props.value);
  };
  const animateClass = props.animate ? 'added-content' : '';
  return (
    <div className={`TitleContent-content ${animateClass}`}>
      <div className="TitleContent-value">{props.value}</div>
      <button
        onClick={update}
      >
      E
      </button>
      <button
        onClick={remove}
      >
      X
      </button>
    </div>
  );
};

TitleContent.propTypes = titleContentProps;

export default TitleContent;
