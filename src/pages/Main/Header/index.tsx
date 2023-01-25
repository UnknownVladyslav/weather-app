import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ISearchPreparedLocation } from 'types';
import { schema, defaultValues } from './config';
import { RButton } from 'components/Form/RButton';
import { RAutocompleteSearchField } from 'components/Form/RAutocompleteSearchField';
import useAppDispatch from 'types/hooks/useAppDispatch';
import useAppSelector from 'types/hooks/useAppSelector';
import { status } from 'utils/const';
import { general } from 'store/general';
import { Wrap, SearchForm } from './styled';

export function AppHeader() {
  const dispatch = useAppDispatch();
  const searchLocationStatus = useAppSelector(
    general.selectors.searchLocationStatus
  );
  const locationOptions = useAppSelector(general.selectors.locationResults);

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { place: ISearchPreparedLocation }) => {
    dispatch(
      general.thunks.getForecast({ formData: data.place.location, params: {} })
    ).then(() => {
      dispatch(general.actions.SET_CURRENT_PLACE(data.place));
    });
  };

  const onInput = (value: string | null) => {
    dispatch(general.thunks.searchLocation(value));
  };

  return (
    <Wrap>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <RAutocompleteSearchField
          name="place"
          //TODO: fix control TS issue
          // @ts-ignore
          control={control}
          options={locationOptions}
          label="Search location:"
          onInput={onInput}
          loading={searchLocationStatus === status.PENDING}
          labelStatic
        />
        <RButton type="submit">Submit</RButton>
      </SearchForm>
    </Wrap>
  );
}
