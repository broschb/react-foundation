import { PropTypes } from 'react';

export const revealContextShape = PropTypes.shape({
  isVisible: PropTypes.bool.isRequired,
  openReveal: PropTypes.func.isRequired,
  closeReveal: PropTypes.func.isRequired
});
