import React from 'react';

import NoteContent from './NoteList/components/NoteContent/NoteContent';
import NoteListProps from './NoteList.props';
import './NoteList.css';

class NoteList extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.notes.forEach((note) => {
      const oldValue = this.props.notes.find(oldNote => oldNote.id === note.id);
      const isNewNote = typeof oldValue === 'undefined';
      if (isNewNote) {
        this.setState({ addedId: note.id });
      }
    });
  }

  handleRemove(id) {
    this.props.onNoteRemove(id);
  }

  render() {
    return (
      <ul className="NoteList">
        {
          this.props.notes.map(noteContent => (
            <NoteContent
              animate
              key={noteContent.id}
              id={noteContent.id}
              value={noteContent.value}
              onRemove={this.handleRemove}
            />
          ))
        }
      </ul>
    );
  }
}

NoteList.propTypes = NoteListProps;

export default NoteList;
