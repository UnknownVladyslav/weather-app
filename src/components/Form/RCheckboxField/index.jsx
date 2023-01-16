import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { CheckboxWrap, CheckboxLabel, Label } from './styled';

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  error: PropTypes.bool,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  checkboxStatic: PropTypes.bool,
  setError: PropTypes.func,
  onChange: PropTypes.func,
};

function CheckboxField({
  label,
  name,
  error,
  size = 16,
  value,
  disabled = false,
  checkboxStatic = false,
  setError = () => {},
  onChange = () => {},
}) {
  const onChangeCheck = (e) => {
    onChange(e.target.checked);
  };

  useEffect(() => {
    (function onPassError() {
      setError(error);
    })();
  }, [error]);

  const renderCheckbox = () => {
    return value ? 'filled icon' : 'empty icon';
  };

  return (
    <CheckboxWrap>
      <input
        type="checkbox"
        id={name}
        size={size}
        checked={value}
        onChange={onChangeCheck}
        disabled={disabled}
        hidden
      />
      <CheckboxLabel
        size={size}
        htmlFor={name}
        disabled={disabled}
      >
        {checkboxStatic ? (
          renderCheckbox()
        ) : (
          <RButtonIcon>{renderCheckbox()}</RButtonIcon>
        )}
      </CheckboxLabel>
      {label && <Label>{label}</Label>}
    </CheckboxWrap>
  );
}

RCheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RCheckboxField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CheckboxField
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          error={!!error}
          {...rest}
        />
      )}
    />
  );
}
