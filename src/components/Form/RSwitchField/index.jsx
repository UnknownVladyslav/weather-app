import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { SwitchWrap, SwitchLabel } from './styled';

SwitchField.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

function SwitchField({
  name,
  size = 28,
  value = false,
  disabled = false,
  onChange = () => {},
}) {
  const onChangeCheck = (e) => {
    onChange(e.target.checked);
  };

  return (
    <SwitchWrap>
      <input
        type="checkbox"
        id={name}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <SwitchLabel
        size={size}
        htmlFor={name}
        active={value}
        disabled={disabled}
      />
    </SwitchWrap>
  );
}

RSwitchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RSwitchField({ name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <SwitchField
          name={name}
          value={value || false}
          onChange={onChange}
          {...rest}
        />
      )}
    />
  );
}
