import { useState, useMemo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldIcons } from './styled';

RSearchField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  height: PropTypes.number,
  amountSymbols: PropTypes.number,
  labelStatic: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperTextStatic: PropTypes.bool,
  onChange: PropTypes.func,
};

export function RSearchField({
  label,
  placeholder,
  value = '',
  helperText,
  height = 40,
  amountSymbols = 3,
  labelStatic = true,
  error = false,
  fullWidth = false,
  helperTextStatic = true,
  onChange = () => {},
}) {
  const ref = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState(value || '');
  const timerId = useRef();

  const onDebounce = (value) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (value.length >= amountSymbols) {
        onChange(value);
      }
      if (value.length === 0) {
        onChange(null);
      }
    }, 1000);
  };

  const onChangeFieldValue = (e) => {
    const { value } = e.target;
    setFieldValue(value);
    onDebounce(value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return (
    <Wrap
      fullWidth={fullWidth}
      ref={ref}
    >
      {labelStatic && <LabelStatic error={error}>{label}</LabelStatic>}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={isFocus}
            activated={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <FieldInput
          type="text"
          height={height}
          error={error}
          value={fieldValue}
          placeholder={placeholder}
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
          activated={isFilled}
          labelStatic
        />
        <FieldIcons>🔎</FieldIcons>
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}
