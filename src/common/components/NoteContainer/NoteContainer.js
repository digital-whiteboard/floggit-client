import React from 'react';

import InputNotes from './components/InputNotes';
//import NoteList from './components/NoteList';
import { getAll, add, remove } from '../../../utils/notes';
import './NoteContainer.css';

class NoteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    getAll().then((notes) => {
      this.setState({ notes });
    });
  }


  handleAdd(value) {
    add(value).then((id) => {
      this.setState({
        notes: this.state.notes.concat([{
          id,
          value,
        }]),
      });
    });
  }

  handleRemove(id) {
    remove(id).then(() => {
      this.setState({
        notes: this.state.notes.filter(noteContent => noteContent.id !== id),
      });
    });
  }

  render() {
    return (
      <div className="NoteContainer-wrapper">
        <InputNotes onAdd={this.handleAdd} />
        <NoteList
          notes={this.state.notes}
          onNoteRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default NoteContainer;
