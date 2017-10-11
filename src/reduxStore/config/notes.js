import noteAPI from '../../utils/noteAPI';

const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_LIST_REPLACE = 'NOTE_LIST_REPLACE';
const NOTE_UPDATE = 'NOTE_UPDATE';

const reducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD: {
      return [...state, action.data];
    }
    case NOTE_REMOVE: {
      return state.filter(note => note.id !== action.data.id);
    }
    case NOTE_LIST_REPLACE: {
      return [...action.data.notes];
    }
    case NOTE_UPDATE: {
      const oldState = state.filter(note => ((note.id !== action.data.id)));
      return [...oldState, action.data];
    }
    default:
      return state;
  }
};

const internalAddNote = (id, title, noteList, color) => ({
  type: NOTE_ADD,
  data: {
    id,
    title,
    noteList,
    color,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalReplaceAllNotes = notes => ({
  type: NOTE_LIST_REPLACE,
  data: { notes },
});

const internalUpdateNote = (id, title, noteList, color) => ({
  type: NOTE_UPDATE,
  data: {
    id,
    title,
    noteList,
    color,
  },
});

const addNote = (title, noteList, color) => dispatch => noteAPI.add(title, noteList, color)
  .then((id) => {
    dispatch(internalAddNote(id, title, noteList, color));
  });

const removeNote = id => dispatch => noteAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveNote(id));
  });

const updateNote = (id, title, noteList, color) => dispatch =>
  noteAPI.update(id, title, noteList, color)
    .then(() => {
      dispatch(internalUpdateNote(id, title, noteList, color));
    });

const loadNotes = () => dispatch => noteAPI.getAll()
  .then((notes) => {
    dispatch(internalReplaceAllNotes(notes));
  });

export { addNote, removeNote, updateNote, loadNotes };
export default reducer;
