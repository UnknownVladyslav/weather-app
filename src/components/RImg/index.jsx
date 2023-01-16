import { useState } from 'react';
import PropTypes from 'prop-types';

import PlaceholderIconSrc from 'assets/img/global/img/icon-placeholder.png';
import { Image } from './styled';

RImg.propTypes = {
  src: PropTypes.string,
  css: PropTypes.object,
};

export function RImg({ src, css }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onLoading = () => {
    setLoaded(true);
  };

  const onError = () => {
    setError(true);
  };

  return (
    <Image
      alt="Icon"
      css={css}
      src={!error && loaded ? src : PlaceholderIconSrc}
      onLoad={onLoading}
      onError={onError}
    />
  );
}
