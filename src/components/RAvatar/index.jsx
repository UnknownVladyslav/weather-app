import PropTypes from 'prop-types';

import { RImg } from 'components/RImg';
import { Main, Wrap, Image, Name } from 'components/RAvatar/styled';

RAvatar.propTypes = {
  size: PropTypes.number,
  thumb: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export function RAvatar({
  size = 50,
  thumb,
  name = 'Avatar',
  onClick = () => {},
}) {
  let formattedName;
  if (!thumb) {
    const splitName = name.split(' ');
    formattedName =
      splitName.length > 1
        ? splitName[0].charAt(0) + splitName[1].charAt(0)
        : splitName[0].substr(0, 1);
  }

  const avatar = thumb ? (
    <Image>
      <RImg src={thumb} />
    </Image>
  ) : (
    <Name size={size}>{formattedName}</Name>
  );

  return (
    <Main onClick={onClick}>
      <Wrap size={size}>{avatar}</Wrap>
    </Main>
  );
}
