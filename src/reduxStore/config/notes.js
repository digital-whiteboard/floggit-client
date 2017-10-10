import noteAPI from '../../utils/noteAPI';

const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_LIST_REPLACE = 'NOTE_LIST_REPLACE';
const NOTE_LOADING = 'NOTE_LOADING';
const NOTE_LOADED = 'NOTE_LOADED';
const NOTE_UPDATE = 'NOTE_UPDATE';

const initialState = {
  data: [],
  isLoading: false,
  errorInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const newNotes = [...state.data, action.data];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_REMOVE: {
      const newNotes = state.data.filter(note => note.id !== action.data.id);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LIST_REPLACE: {
      const newNotes = [...action.data.notes];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case NOTE_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case NOTE_UPDATE: {
      return Object.assign({}, state, {
        value: Object.assign({}, state.data.value, { value: action.data.value }),
      });
    }
    default:
      return state;
  }
};

const internalAddNote = (id, value) => ({
  type: NOTE_ADD,
  data: {
    id,
    value,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalReplaceAllNotes = notes => ({
  type: NOTE_LIST_REPLACE,
  data: {
    notes,
  },
});

const internalUpdateNote = (id, value) => ({
  type: NOTE_UPDATE,
  data: {
    id,
    value,
  },
});

const updateNote = (id, value) => dispatch => noteAPI.update(id, value)
  .then(() => {
    dispatch(internalUpdateNote(id, value));
  });

const internalLoadingNotes = () => ({
  type: NOTE_LOADING,
});

const internalLoadedNotes = () => ({
  type: NOTE_LOADED,
});

const addNote = value => dispatch => noteAPI.add(value)
  .then((id) => {
    dispatch(internalAddNote(id, value));
  });

const removeNote = id => dispatch => noteAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveNote(id));
  });

const loadNotes = () => (dispatch) => {
  dispatch(internalLoadingNotes());
  return noteAPI.getAll()
    .then((notes) => {
      dispatch(internalReplaceAllNotes(notes));
      dispatch(internalLoadedNotes());
    })
    .catch(() => {
      dispatch(internalLoadedNotes());
    });
};

export { addNote, removeNote, loadNotes, updateNote };
export default reducer;
