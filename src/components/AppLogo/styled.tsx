import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'assets/img/global/logo/app-logo.svg';

const Logo = styled(LogoIcon)`
  display: block;
  margin: 0 auto;
  ${({ css }) => css}
`;

export { Logo };
