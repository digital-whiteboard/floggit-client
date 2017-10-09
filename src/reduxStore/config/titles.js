import titleAPI from '../../utils/titleAPI';

const TITLE_ADD = 'TITLE_ADD';
const TITLE_REMOVE = 'TITLE_REMOVE';
const TITLE_LIST_REPLACE = 'TITLE_LIST_REPLACE';
const TITLE_LOADING = 'TITLE_LOADING';
const TITLE_LOADED = 'TITLE_LOADED';
const TITLE_UPDATE = 'TITLE_UPDATE';

const initialState = {
  data: [],
  isLoading: false,
  errorInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_ADD: {
      const newTitles = [...state.data, action.data];
      return Object.assign({}, state, { data: newTitles });
    }
    case TITLE_REMOVE: {
      const newTitles = state.data.filter(title => title.id !== action.data.id);
      return Object.assign({}, state, { data: newTitles });
    }
    case TITLE_LIST_REPLACE: {
      const newTitles = [...action.data.titles];
      return Object.assign({}, state, { data: newTitles });
    }
    case TITLE_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case TITLE_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case TITLE_UPDATE: {
      return Object.assign({}, state, {
        value: Object.assign({}, state.data.value, { value: action.data.value }),
      });
    }
    default:
      return state;
  }
};

const internalUpdateTitle = (id, value) => ({
  type: TITLE_UPDATE,
  data: {
    id,
    value,
  },
});

const internalAddTitle = (id, value) => ({
  type: TITLE_ADD,
  data: {
    id,
    value,
  },
});

const internalRemoveTitle = id => ({
  type: TITLE_REMOVE,
  data: { id },
});

const internalReplaceAllTitles = titles => ({
  type: TITLE_LIST_REPLACE,
  data: {
    titles,
  },
});

const internalLoadingTitles = () => ({
  type: TITLE_LOADING,
});

const internalLoadedTitles = () => ({
  type: TITLE_LOADED,
});

const updateTitle = (id, value) => dispatch => titleAPI.update(id, value)
  .then(() => {
    dispatch(internalUpdateTitle(id, value));
  });

const addTitle = value => dispatch => titleAPI.add(value)
  .then((id) => {
    dispatch(internalAddTitle(id, value));
  });

const removeTitle = id => dispatch => titleAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveTitle(id));
  });

const loadTitles = () => (dispatch) => {
  dispatch(internalLoadingTitles());
  return titleAPI.getAll()
    .then((titles) => {
      dispatch(internalReplaceAllTitles(titles));
      dispatch(internalLoadedTitles());
    })
    .catch(() => {
      dispatch(internalLoadedTitles());
    });
};

export { addTitle, removeTitle, loadTitles, updateTitle };
export default reducer;
