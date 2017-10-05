import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default props;
