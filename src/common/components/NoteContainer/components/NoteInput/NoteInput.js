import React from 'react';

import noteInputProps from './NoteInput.props';
import './NoteInput.css';

const NoteInput = (props) => {
  let title;
  let noteList;
  let color;

  const handleClick = () => {
    if (title.value.length > 1 && noteList.value.length > 1 && color.value.length > 1) {
      props.onAdd(title.value, noteList.value, color.value);
      title.value = '';
      noteList.value = '';
      color.value = '';
    } else {
      alert('Write something...');
    }
  };

  return (
    <div className="controlBox">
      <input
        type="text"
        ref={(currentElement) => { title = currentElement; }}
        placeholder="Title text"
      />
      <textarea
        ref={(currentElement) => { noteList = currentElement; }}
        name="note-list"
        placeholder="Notes text"
      />
      <select
        name="color"
        ref={(currentElement) => { color = currentElement; }}
      >
        <option value="">Choose color</option>
        <option
          value="#3151b5"
        >
              Indigo
        </option>
        <option
          value="#26a69a"
        >
              Teal
        </option>
        <option
          value="#66bb6a"
        >
              Green
        </option>
        <option
          value="#ffa726"
        >
              Orange
        </option>
      </select>
      <button
        type="button"
        onClick={handleClick}
      >
          Add Note
      </button>
    </div>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
