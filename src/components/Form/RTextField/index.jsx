import { useState, useMemo, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  error: PropTypes.bool,
  labelStatic: PropTypes.bool,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  onChange: PropTypes.func,
};

function TextField({
  name,
  label,
  type = 'text',
  value,
  helperText,
  height = 40,
  labelStatic = true,
  error = false,
  helperTextStatic = true,
  placeholder,
  fullWidth = false,
  disabled = false,
  hidden = false,
  onChange = () => {},
}) {
  const [fieldType, setFieldType] = useState(type);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setFieldType(type);
  }, [type]);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const handlePassword = () => {
    const type = fieldType === 'password' ? 'text' : 'password';
    setFieldType(type);
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
        {!labelStatic && (
          <Label
            htmlFor={name}
            focus={isFocus}
            activated={isFilled}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
        )}
        <FieldInput
          id={name}
          type={fieldType}
          height={height}
          appendIcon={fieldType === 'password'}
          error={error}
          placeholder={placeholder}
          onChange={disabled || hidden ? undefined : onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          activated={isFilled}
          disabled={disabled}
          hidden={hidden}
          readOnly={disabled || hidden}
          labelStatic={labelStatic}
        />
        <FieldIcons disabled={disabled}>
          {type === 'password' && (
            <RButtonIcon
              onClick={handlePassword}
              asButton={!disabled}
            >
              {fieldType === 'password' ? '👁' : '👁'}
            </RButtonIcon>
          )}
        </FieldIcons>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

export function RTextField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
