import { Wrap } from './styled';

// eslint-disable-next-line react/prop-types
export function RListIsEmpty({ children }) {
  return <Wrap>{children || 'List is empty'}</Wrap>;
}
