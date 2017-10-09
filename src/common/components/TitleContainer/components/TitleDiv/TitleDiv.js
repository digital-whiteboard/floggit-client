import React from 'react';

import TitleContent from './components/TitleContent';
import titleDivProps from './TitleDiv.props';
import './TitleDiv.css';

const TitleDiv = (props) => {
  let input;

  const handleRemove = (id) => {
    props.onTitleRemove(id);
  };

  const handleUpdate = (id) => {
    props.onTitleUpdate(id, input.value);
  };

  return (
    <div className="TitleDiv">
      <input
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="visibleAtClick"
      />
      {
        props.titles.map(titleContent => (
          <TitleContent
            animate
            key={titleContent.id}
            id={titleContent.id}
            value={titleContent.value}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))
      }
    </div>
  );
};


TitleDiv.propTypes = titleDivProps;

export default TitleDiv;
