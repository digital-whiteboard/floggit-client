import PropTypes from 'prop-types';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onNoteRemove: PropTypes.func.isRequired,
};

export default propTypes;
