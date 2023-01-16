import { useState, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Wrap, LabelStatic, FieldWrap, HelperText } from '../_shared/styled';
import { FieldLabel, FieldInput, HelperBlock, AmountSymbols } from './styled';

TextareaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  height: PropTypes.number,
  maxSymbols: PropTypes.number,
  labelStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

function TextareaField({
  name,
  label,
  value,
  helperText,
  height = 40,
  placeholder,
  maxSymbols,
  labelStatic = false,
  disabled = false,
  fullWidth = false,
  error = false,
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
    return value.length > 0;
  }, [value]);

  return (
    <Wrap fullWidth={fullWidth}>
      {labelStatic && (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      )}
      <FieldWrap>
        {!labelStatic && (
          <FieldLabel
            htmlFor={name}
            focus={isFocus}
            activated={isFilled}
            disabled={disabled}
            error={error}
          >
            {label}
          </FieldLabel>
        )}
        <FieldInput
          id={name}
          height={height}
          error={error}
          value={value}
          activated={isFilled}
          labelStatic={labelStatic}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FieldWrap>
      <HelperBlock>
        <HelperText>{error && helperText}</HelperText>
        {maxSymbols && (
          <AmountSymbols>
            {value.length} / {maxSymbols}
          </AmountSymbols>
        )}
      </HelperBlock>
    </Wrap>
  );
}

RTextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RTextareaField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextareaField
          name={name}
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

export { RTextareaField };
