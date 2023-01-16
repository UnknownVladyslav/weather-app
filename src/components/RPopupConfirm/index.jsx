import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { RButton } from 'components/Form/RButton';
import { RMask } from 'components/RMask';
import { RModalPortal } from 'components/RModalPortal';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { Popup, Header, Title, Close, Body, Footer } from './styled';

RPopupConfirm.propTypes = {
  width: PropTypes.number,
  fullHeight: PropTypes.bool,
  maxHeight: PropTypes.number,
  confirmButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  isLoading: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  popupTitle: PropTypes.string,
  children: PropTypes.any,
  buttonPosition: PropTypes.string,
};

export function RPopupConfirm({
  width = 420,
  fullHeight,
  maxHeight,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  isLoading = false,
  onClose = () => {},
  onConfirm = () => {},
  popupTitle,
  children,
  buttonPosition,
}) {
  return (
    <RModalPortal>
      <RMask>
        <Popup {...{ width, fullHeight, maxHeight, popupTitle }}>
          <RLoadingOverlay isVisible={isLoading} />
          <Header>
            {popupTitle ? <Title>{popupTitle}</Title> : null}
            <Close>
              {onClose ? (
                <RButtonIcon
                  color="#C4C4C4"
                  onClick={onClose}
                >
                  ✖
                </RButtonIcon>
              ) : null}
            </Close>
          </Header>
          <Body>{children}</Body>
          <Footer buttonPosition={buttonPosition}>
            <RButton
              variant="text"
              onClick={onClose}
              fullWidth
            >
              {cancelButtonText}
            </RButton>
            <RButton
              onClick={onConfirm}
              fullWidth
            >
              {confirmButtonText}
            </RButton>
          </Footer>
        </Popup>
      </RMask>
    </RModalPortal>
  );
}
