import React from 'react';

import TitleContent from './components/TitleContent';
import TitleDivProps from './TitleDiv.props';

const TitleDiv = (props) => {
  const handleRemove = (id) => {
    props.onNoteRemove(id);
  };

  const handleUpdate = (id, value) => {
    props.onTitleUpdate(id, value);
  };

  return (
    <div className="TitleDiv">
      {
        this.props.titles.map(titleContent => (
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


TitleDiv.propTypes = TitleDivProps;

export default TitleDiv;
