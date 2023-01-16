import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away-extreme.css';

import { ContentWrap } from './styled';

RTooltip.propTypes = {
  tooltip: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  zIndex: PropTypes.string,
  offset: PropTypes.any,
  placement: PropTypes.string,
  interactive: PropTypes.bool,
  children: PropTypes.any,
};

export function RTooltip({
  children,
  tooltip,
  placement = 'bottom-end',
  maxWidth,
  minWidth,
  offset = [12, 17],
  zIndex,
  interactive = true,
}) {
  return (
    <Tippy
      content={<ContentWrap css={{ minWidth }}>{tooltip}</ContentWrap>}
      appendTo={document.body}
      animation="shift-away-extreme"
      role="tooltip"
      placement={placement}
      maxWidth={maxWidth}
      offset={offset}
      zIndex={zIndex}
      interactive={interactive}
      hideOnClick={false}
    >
      {children}
    </Tippy>
  );
}
