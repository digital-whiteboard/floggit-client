import React from 'react';

import noteContentProps from './NoteContent.props';
import './NoteContent.css';

const NoteContent = (props) => {
  let title;
  let noteList;
  let color;

  const remove = () => {
    props.onRemove(props.id);
  };

  const update = () => {
    props.onUpdate(props.id, title.value, noteList.value, color.value);
    title.value = '';
    noteList.value = '';
    color.value = '';
  };

  return (
    <div className="NoteContent-title" style={{ backgroundColor: props.color }}>
      <h2 style={{ backgroundColor: props.color }}>{props.title}</h2>
      <div>{props.noteList}</div>
      <input
        type="title text"
        defaultValue={props.title}
        ref={(currentElement) => { title = currentElement; }}
        placeholder="new title"
      />
      <textarea
        type="note text"
        defaultValue={props.noteList}
        ref={(currentElement) => { noteList = currentElement; }}
        placeholder="new on list"
      />
      <select
        name="color"
        ref={(currentElement) => { color = currentElement; }}
      >
        <option value="">Choose color</option>
        <option value="#ff6e00" > Orange </option>
        <option value="#630000" > WineRed </option>
        <option value="#0d79f2" > Blue </option>
        <option value="#ae469e" > Purple </option>
      </select>
      <button onClick={update} > EDIT </button>
      <button onClick={remove} > X </button>
    </div>
  );
};

NoteContent.propTypes = noteContentProps;

export default NoteContent;
