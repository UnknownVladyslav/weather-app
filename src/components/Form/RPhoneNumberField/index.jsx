import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

import {
  FieldWrap,
  HelperText,
  LabelStatic,
  Wrap,
} from 'components/Form/_shared/styled';
import { FieldInput } from './styled';

PhoneNumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  height: PropTypes.number,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  labelStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  enableSearch: PropTypes.bool,
  autoFormat: PropTypes.bool,
  enableLongNumbers: PropTypes.bool,
  onChange: PropTypes.func,
};

function PhoneNumberField({
  name,
  label,
  value,
  helperText,
  height = 40,
  error = false,
  disabled = false,
  fullWidth = false,
  enableSearch = false,
  autoFormat = true,
  enableLongNumbers = false,
  labelStatic = false,
  onChange = () => {},
}) {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return !!value || value.length > 0;
  }, [value]);

  return (
    <Wrap fullWidth={fullWidth}>
      {label && labelStatic ? (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      ) : null}
      <FieldWrap>
        <FieldInput
          fullWidth={fullWidth}
          height={height}
          focus={isFocus}
          activated={isFilled}
          error={error}
          disabled={disabled}
        >
          <PhoneInput
            inputProps={{
              id: name,
              name,
              disabled,
            }}
            disableDropdown={disabled}
            enableSearch={enableSearch}
            enableLongNumbers={enableLongNumbers}
            autoFormat={autoFormat}
            value={value}
            onChange={disabled ? undefined : onChange}
            country="us"
            onlyCountries={['us']}
            specialLabel=""
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FieldInput>
      </FieldWrap>
      <HelperText>{error && helperText}</HelperText>
    </Wrap>
  );
}

RPhoneNumberField.propTypes = {
  disabled: PropTypes.bool,
  enableSearch: PropTypes.any,
  autoFormat: PropTypes.any,
  enableLongNumbers: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RPhoneNumberField({
  disabled,
  enableSearch,
  autoFormat,
  enableLongNumbers,
  label,
  name,
  control,
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PhoneNumberField
          name={name}
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          disabled={disabled}
          enableSearch={enableSearch}
          enableLongNumbers={enableLongNumbers}
          autoFormat={autoFormat}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
