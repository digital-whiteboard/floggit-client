import { connect } from 'react-redux';

import NotesWrapper from './NotesWrapper';
import { addNote, removeNote } from '../../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes.data,
  isLoading: state.notes.isLoading,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (value) => {
    dispatch(addNote(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesWrapper);
