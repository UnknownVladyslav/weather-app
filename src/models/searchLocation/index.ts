export const searchLocationModel = (
  id = 0,
  name = '',
  country = '',
  code = '',
  admin1 = '',
  admin2 = '',
  latitude = '',
  longitude = ''
) => {
  return {
    id,
    name,
    admin1,
    admin2,
    country,
    code,
    label: `${name}, ${admin1}, ${admin2}, ${country}`,
    value: name,
    location: { latitude, longitude },
  };
};
