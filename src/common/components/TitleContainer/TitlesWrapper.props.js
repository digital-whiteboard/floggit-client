import PropTypes from 'prop-types';

const propTypes = {
  isLoading: PropTypes.bool,
  titles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default propTypes;
