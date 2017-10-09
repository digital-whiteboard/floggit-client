import React from 'react';

import TitleContent from './components/TitleContent';
import titleDivProps from './TitleDiv.props';
import './TitleDiv.css';

const TitleDiv = (props) => {
  const handleRemove = (id) => {
    props.onTitleRemove(id);
  };
  const handleUpdate = (id, value) => {
    props.onTitleUpdate(id, value);
  };

  return (
    <div className="TitleDiv">
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
