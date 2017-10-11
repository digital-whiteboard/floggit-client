import PropTypes from 'prop-types';

const propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    noteList: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })),
  onNoteRemove: PropTypes.func.isRequired,
  onNoteUpdate: PropTypes.func.isRequired,
};

export default propTypes;
