import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default propTypes;
