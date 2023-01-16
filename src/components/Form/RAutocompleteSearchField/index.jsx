import { useState, useMemo, useRef } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { RLoader } from 'components/RLoader';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
} from '../_shared/styled';
import { FieldInput, FieldDropdownOption } from './styled';

AutocompleteSearchField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  height: PropTypes.number,
  amountSymbols: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  labelStatic: PropTypes.bool,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
};

function AutocompleteSearchField({
  label,
  placeholder,
  helperText,
  height = 40,
  amountSymbols = 3,
  options = [],
  value,
  labelStatic = true,
  error = false,
  loading = false,
  helperTextStatic = true,
  fullWidth = false,
  onChange = () => {},
  onInput = () => {},
}) {
  const ref = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fieldValue, setFieldValue] = useState('');
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const timerId = useRef();

  const onDebounce = (value) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      // eslint-disable-next-line react/prop-types
      if (value.length >= amountSymbols) {
        onInput(value);
        setDropdownIsOpened(true);
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
    if (fieldValue.length >= amountSymbols) setDropdownIsOpened(true);
  };

  const onBlur = () => {
    if (dropdownIsOpened) setIsFocus(false);
  };

  const onChooseOption = (option) => {
    setFieldValue(option.label);
    onChange(option);
    setDropdownIsOpened(false);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const isFilled = useMemo(() => {
    return fieldValue.length > 0;
  }, [fieldValue]);

  const renderOptions = () => {
    if (loading) {
      return (
        <FieldDropdownOption justify="center">
          <RLoader />
        </FieldDropdownOption>
      );
    }
    if (!options.length) return <RListIsEmpty />;

    return options.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        <span>{option.label}</span>
      </FieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

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
          activated={isFilled}
          labelStatic={labelStatic}
          onChange={onChangeFieldValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {dropdownIsOpened && (
          <FieldDropdown className="custom-scroll">
            {renderOptions()}
          </FieldDropdown>
        )}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RAutocompleteSearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
};

export function RAutocompleteSearchField({
  label,
  name,
  control,
  options,
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AutocompleteSearchField
          label={label}
          value={value}
          options={options}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}
