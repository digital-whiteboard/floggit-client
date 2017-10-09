import React from 'react';

import TitleInput from './components/TitleInput';
import TitleDiv from './components/TitleDiv';
import titlesWrapperProps from './TitlesWrapper.props';
import './TitleContainer.css';

const TitlesWrapper = (props) => {
  const generateList = (titles, handleRemove, handleUpdate) => (
    <TitleDiv
      titles={titles}
      onTitleRemove={handleRemove}
      onTitleUpdate={handleUpdate}
    />
  );

  const generateLoadingWidget = () => (
    <div> Loading </div>
  );

  return (
    <div className="TitleContainer-wrapper">
      <TitleInput onAdd={props.handleAdd} />
      {
        props.isLoading ?
          generateLoadingWidget() : generateList(props.titles, props.handleRemove,
            props.handleUpdate)}
    </div>
  );
};

TitlesWrapper.propTypes = titlesWrapperProps;

export default TitlesWrapper;
