import PropTypes from 'prop-types';

const propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    noteList: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
    })),
    color: PropTypes.string.isRequired,
  })),
  isLoading: PropTypes.bool,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

// const propTypes = {
//   isLoading: PropTypes.bool,
//   notes: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//   })),
//   handleAdd: PropTypes.func.isRequired,
//   handleRemove: PropTypes.func.isRequired,
//   handleUpdate: PropTypes.func.isRequired,
// };

export default propTypes;
