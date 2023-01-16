import PropTypes from 'prop-types';

import { Logo } from './styled';

AppLogo.propTypes = {
  css: PropTypes.any,
};

function AppLogo({ css }) {
  return <Logo css={css} />;
}

export { AppLogo };
