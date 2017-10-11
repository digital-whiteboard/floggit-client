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
    <div className="Temp-or-Remove-ATM-ADDER">
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
          value="#D2691E"
        >
              Chocolate
        </option>
        <option
          value="#DCDCDC"
        >
              Grey
        </option>
        <option
          value="#8A2BE2"
        >
              BlueViolet
        </option>
        <option
          value="#FFD700"
        >
              Yellow
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
