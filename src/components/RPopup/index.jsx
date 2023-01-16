import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { Popup, Header, Title, Close } from './styled';

RPopup.propTypes = {
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  popupTitle: PropTypes.string,
  titleCss: PropTypes.object,
  popupCss: PropTypes.object,
  children: PropTypes.any,
  onClose: PropTypes.func,
};

function RPopup({
  width = 420,
  fullHeight,
  maxHeight,
  onClose,
  popupTitle,
  titleCss,
  popupCss,
  children,
  ...rest
}) {
  return (
    <Popup {...{ width, fullHeight, maxHeight, popupTitle, popupCss, ...rest }}>
      <Header>
        {popupTitle ? <Title css={titleCss}>{popupTitle}</Title> : null}
        <Close>
          {onClose ? (
            <RButtonIcon
              color="#889097"
              onClick={onClose}
            >
              ✖
            </RButtonIcon>
          ) : null}
        </Close>
      </Header>
      {children}
    </Popup>
  );
}

export { RPopup };
