import { Box } from './styled';

// eslint-disable-next-line react/prop-types
export function RBox({ css, children }) {
  return <Box css={css}>{children}</Box>;
}
