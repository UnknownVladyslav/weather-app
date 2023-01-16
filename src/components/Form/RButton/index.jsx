import PropTypes from 'prop-types';

import { Button, ButtonChildren, PrependIcon } from './styled';

RButton.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  prependIcon: PropTypes.any,
  type: PropTypes.string,
  variantColor: PropTypes.string,
  height: PropTypes.number,
  form: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  css: PropTypes.any,
};

export function RButton({
  type = 'button',
  variant = 'contained',
  variantColor,
  prependIcon,
  fullWidth,
  height = 40,
  disabled = false,
  onClick = () => {},
  children,
  css,
  form,
  ...rest
}) {
  return (
    <Button
      type={type}
      variant={variant}
      variantColor={variantColor}
      fullWidth={fullWidth}
      height={height}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      css={css}
      form={form}
      {...rest}
    >
      <ButtonChildren>
        {prependIcon && (
          <PrependIcon disabled={disabled}>{prependIcon}</PrependIcon>
        )}
        {children}
      </ButtonChildren>
    </Button>
  );
}
