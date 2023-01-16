import { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as IconCalendarSvg } from 'assets/img/global/datepicker/calendar.svg';
import {
  Wrap,
  Label,
  FieldWrap,
  HelperText,
  LabelStatic,
} from '../_shared/styled';
import { MemoizedDatePickerContainer } from './DatePickerContainer';
import { MemoizedDatePickerHeader } from './DatePickerHeader';
import { FieldInput, FieldAppendIcon } from './styled';

DatePickerComponent.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  height: PropTypes.number,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  helperTextStatic: PropTypes.bool,
  withAppendIcon: PropTypes.bool,
  labelStatic: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  endDate: PropTypes.any,
  value: PropTypes.any,
  name: PropTypes.string,
  startDate: PropTypes.any,
};

function DatePickerComponent({
  placeholder,
  label,
  name,
  helperText,
  value = '',
  height = 40,
  startDate,
  endDate,
  fullWidth = false,
  error = false,
  helperTextStatic = true,
  withAppendIcon = true,
  labelStatic = false,
  disabled = false,
  onChange = () => {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);

  const isFilled = useMemo(() => {
    return !!value;
  }, [value]);

  const onChangeDate = (date, event) => {
    onChange(date, event);
  };

  const renderCustomHeader = (props) => <MemoizedDatePickerHeader {...props} />;

  const calendarContainer = (props) => {
    return <MemoizedDatePickerContainer {...{ ...props }} />;
  };

  return (
    <Wrap fullWidth={fullWidth}>
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
            focus={focus}
            activated={isFilled}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
        )}

        <FieldInput
          height={height}
          error={error}
          activated={isFilled}
          disabled={disabled}
          withAppendIcon={withAppendIcon}
          labelStatic={labelStatic}
        >
          <DatePicker
            placeholderText={placeholder}
            timeCaption="Select time"
            autoComplete="off"
            className="field-input"
            selected={new Date(value)}
            onChange={onChangeDate}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            startDate={startDate}
            endDate={endDate}
            renderCustomHeader={renderCustomHeader}
            calendarContainer={calendarContainer}
            disabled={disabled}
            {...rest}
          />
        </FieldInput>

        {withAppendIcon && (
          <FieldAppendIcon
            height={height}
            error={error}
          >
            <IconCalendarSvg />
          </FieldAppendIcon>
        )}
      </FieldWrap>
      {helperTextStatic && <HelperText>{error && helperText}</HelperText>}
    </Wrap>
  );
}

RDatePickerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
};

function RDatePickerField({ label, name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePickerComponent
          label={label}
          name={name}
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

export { RDatePickerField };
