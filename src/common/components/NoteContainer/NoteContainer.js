import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { addNote, removeNote, updateNote } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (title, noteList, color) => {
    dispatch(addNote(title, noteList, color));
  },
  handleUpdate: (id, title, noteList, color) => {
    dispatch(updateNote(id, title, noteList, color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
