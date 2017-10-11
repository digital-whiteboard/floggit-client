import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  noteList: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default props;
