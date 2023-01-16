import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { RadioWrap, RadioLabel, RadioLabelText } from './styled';

RRadioField.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.any,
  css: PropTypes.any,
  size: PropTypes.number,
};

export function RRadioField({
  children,
  value,
  size = 24,
  css,
  checked,
  readonly = false,
  disabled = false,
  onChange = () => {},
}) {
  const theme = useTheme();

  const onChangeRadio = (e) => {
    onChange(e.target.value);
  };

  return (
    <RadioWrap css={css}>
      <input
        type="radio"
        id={value}
        size={size}
        value={value}
        checked={checked === value}
        onChange={!disabled || !readonly ? onChangeRadio : undefined}
        disabled={disabled || readonly}
        hidden
      />
      <RadioLabel
        size={size}
        htmlFor={value}
      >
        <RButtonIcon
          color={theme.osloGrey}
          disabled={disabled}
          readonly={readonly}
        >
          {/* TODO: add radio icon  */}✅
        </RButtonIcon>
      </RadioLabel>
      <RadioLabelText>{children}</RadioLabelText>
    </RadioWrap>
  );
}
