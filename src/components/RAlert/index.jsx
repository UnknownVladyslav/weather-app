import { Alert } from './styled';

// eslint-disable-next-line react/prop-types
function RAlert({ children, css }) {
  return <Alert alertCss={css}>{children}</Alert>;
}

export { RAlert };
