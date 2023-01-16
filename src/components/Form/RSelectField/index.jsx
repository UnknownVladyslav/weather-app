import { useState, useMemo, useRef } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { RListIsEmpty } from 'components/RListIsEmpty';
import {
  Wrap,
  Label,
  LabelStatic,
  FieldWrap,
  FieldDropdown,
  HelperText,
  DropdownOptionPrependIcon,
} from '../_shared/styled';
import {
  FieldInput,
  FieldIcons,
  FieldDropdownOption,
  FieldPrependIcon,
} from './styled';

SelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    path: PropTypes.string,
  }),
  height: PropTypes.number,
  disabled: PropTypes.bool,
  labelStatic: PropTypes.bool,
  error: PropTypes.bool,
  helperTextStatic: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

function SelectField({
  name,
  label,
  placeholder,
  helperText,
  options = [],
  value,
  height = 40,
  disabled,
  labelStatic = true,
  error = false,
  helperTextStatic = true,
  fullWidth = false,
  onChange = () => {},
}) {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const ref = useRef(null);

  const onOpenDropdown = () => {
    setDropdownIsOpened(!dropdownIsOpened);
  };

  const onCloseDropdown = () => {
    setDropdownIsOpened(false);
  };

  const onChooseOption = (option) => {
    onChange(option);
    onCloseDropdown();
  };

  const renderOptions = () => {
    if (!options.length) return <RListIsEmpty />;

    return options.map((option) => (
      <FieldDropdownOption
        key={option.value}
        active={option.value === value.value}
        onClick={() => onChooseOption(option)}
      >
        {option.path && (
          <DropdownOptionPrependIcon
            src={option.path}
            alt=""
          />
        )}
        {option.label}
      </FieldDropdownOption>
    ));
  };

  useOutsideClick(ref, () => {
    if (dropdownIsOpened) {
      onCloseDropdown();
    }
  });

  const isFilled = useMemo(() => {
    return Object.values(value).some((val) => val.length > 0);
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      ref={ref}
    >
      {label && labelStatic && (
        <LabelStatic
          htmlFor={name}
          error={error}
          disabled={disabled}
        >
          {label}
        </LabelStatic>
      )}
      <FieldWrap>
        {label && !labelStatic && (
          <Label
            focus={dropdownIsOpened}
            activated={isFilled}
            error={error}
          >
            {label}
          </Label>
        )}
        <div onClick={!disabled ? onOpenDropdown : undefined}>
          <FieldInput
            type="text"
            labelStatic={labelStatic}
            placeholder={placeholder}
            activated={isFilled}
            height={height}
            error={error}
            value={value.label}
            withPrependIcon={!!value.path}
            disabled={disabled}
            readOnly
          />
          {value.path && (
            <FieldPrependIcon
              src={value.path}
              alt=""
            />
          )}
          <FieldIcons isOpened={dropdownIsOpened}>🔽</FieldIcons>
        </div>
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

RSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RSelectField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectField
          name={name}
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message ?? ''}
          {...rest}
        />
      )}
    />
  );
}

export { RSelectField };
