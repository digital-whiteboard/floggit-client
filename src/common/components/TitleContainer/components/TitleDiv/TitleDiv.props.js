import PropTypes from 'prop-types';

const propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onTitleRemove: PropTypes.func.isRequired,
  onTitleUpdate: PropTypes.func.isRequired,
};

export default propTypes;
