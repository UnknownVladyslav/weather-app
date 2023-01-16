import PropTypes from 'prop-types';

import { RLoader } from 'components/RLoader';
import { Overlay } from './styled';

RLoadingOverlay.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.any,
  bgColor: PropTypes.string,
};

export function RLoadingOverlay({
  isVisible,
  bgColor = 'rgba(255, 255, 255, 0.7)',
  children,
}) {
  return (
    <Overlay
      isVisible={isVisible}
      bgColor={bgColor}
    >
      {children || <RLoader />}
    </Overlay>
  );
}
