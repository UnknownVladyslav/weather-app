import PropTypes from 'prop-types';

import { ButtonIcon, IconHover } from './styled';

RButtonIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.any,
  asButton: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  onClick: PropTypes.func,
};

export function RButtonIcon({
  size = 24,
  color = '#989898',
  onClick = () => {},
  children,
  asButton = false,
  disabled = false,
  readonly = false,
}) {
  return (
    <ButtonIcon
      as={asButton ? 'button' : undefined}
      type={asButton ? 'button' : undefined}
      size={size}
      onClick={!disabled ? onClick : undefined}
      isDisabled={disabled}
      isReadonly={readonly}
    >
      {children}
      <IconHover color={color} />
    </ButtonIcon>
  );
}
