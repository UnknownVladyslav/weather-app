import { FlexWrap, Typography } from 'components/App/GlobalStyled';
import { RLoader } from 'components/RLoader';
import useAppSelector from 'types/hooks/useAppSelector';
import { ReactComponent as IconLocation } from 'assets/img/icons/icon-location.svg';
import { ReactComponent as IconArrow } from 'assets/img/icons/icon-arrow.svg';
import { general } from 'store/general';
import { status, weatherIcons } from 'utils/const';
import {
  Wrap,
  SideBlock,
  DailyInfoBlock,
  Date,
  Location,
  Weather,
  Degrees,
  Units,
  Row,
  WindDirection,
} from './styled';

export function MainInfoBlock() {
  const currentPlace = useAppSelector(general.selectors.currentPlace);
  const weatherData = useAppSelector(general.selectors.currentWeatherData);
  const loadingDataStatus = useAppSelector(general.selectors.getForecastStatus);

  const CurrentIcon = () => {
    return weatherData && weatherIcons[weatherData.weatherCode];
  };

  const loadingInProgress = loadingDataStatus === status.PENDING;

  return (
    <Wrap>
      <SideBlock>
        {weatherData ? (
          <>
            <Date>
              <Typography
                fz="37px"
                fw="bold"
              >
                {weatherData.dayOfWeek}
              </Typography>
              <Typography
                fz="24px"
                fw="500"
              >
                {weatherData.date}
              </Typography>
              <Location>
                <IconLocation />
                <Typography fz="20px">{`${currentPlace.name}`}</Typography>
                <Typography fz="20px">{currentPlace.code}</Typography>
              </Location>
            </Date>
            <Weather>
              <CurrentIcon />
              <Degrees>
                {weatherData.temperature}
                &nbsp;{weatherData.units.temperatureUnit}
              </Degrees>
              <Typography
                fz="30px"
                fw="bold"
              >
                {weatherData.weatherType}
              </Typography>
            </Weather>
          </>
        ) : loadingInProgress ? (
          <RLoader />
        ) : (
          <Typography
            fz="24px"
            fw="bold"
          >
            Type place name to load data
          </Typography>
        )}
      </SideBlock>
      {weatherData && (
        <DailyInfoBlock>
          <Row>
            <Typography
              fz="28px"
              fw="bold"
              tt="uppercase"
            >
              Wind
            </Typography>
            <FlexWrap gap="10px">
              <Units>
                {weatherData.windSpeed}&nbsp;{weatherData.units.windSpeedUnit}
              </Units>
              <WindDirection direction={weatherData.windDirection}>
                <IconArrow />
              </WindDirection>
            </FlexWrap>
          </Row>
        </DailyInfoBlock>
      )}
    </Wrap>
  );
}
