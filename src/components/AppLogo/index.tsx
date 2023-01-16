import { DefaultProps } from 'types/common';
import { Logo } from './styled';

function AppLogo({ css }: DefaultProps<SVGAElement>) {
  return <Logo css={css} />;
}

export { AppLogo };
