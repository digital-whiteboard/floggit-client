import PropTypes from 'prop-types';

const props = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default props;
