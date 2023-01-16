import PropTypes from 'prop-types';

import { Wrap, QrImage } from './styled';

RQrCode.propTypes = {
  path: PropTypes.string,
  variant: PropTypes.string,
};

export function RQrCode({ variant = 'placeholder', path }) {
  return (
    <Wrap>
      {variant === 'qr' ? (
        <QrImage
          src={path}
          alt="QR code"
        />
      ) : (
        'A QR code will appear here'
      )}
    </Wrap>
  );
}
