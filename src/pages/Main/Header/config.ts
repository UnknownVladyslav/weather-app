import yup from 'plugins/yup-config';

import { searchLocationModel } from 'models/searchLocation';

const defaultValues = {
  place: searchLocationModel(),
};

const schema = yup.object().shape({
  place: yup.object().shape({
    id: yup.number().required(),
    label: yup.string().required(),
    value: yup.string().min(3).required(),
    location: yup.object().required(),
  }),
});

export { schema, defaultValues };
