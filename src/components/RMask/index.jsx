import PropTypes from 'prop-types';

import { Mask } from './styled';

RMask.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

function RMask({
  color = 'rgba(221, 222, 225, 0.45)',
  onClick = () => {},
  children,
}) {
  return (
    <Mask
      color={color}
      onClick={onClick}
    >
      {children}
    </Mask>
  );
}

export { RMask };
