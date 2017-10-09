import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default propTypes;
