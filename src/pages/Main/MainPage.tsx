import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useAppDispatch from 'types/hooks/useAppDispatch';
import useAppSelector from 'types/hooks/useAppSelector';
import { MainInfoBlock } from './MainInfoBlock';
import { ROverlay } from 'components/ROverlay';
import { AppHeader } from './Header';
import { ILocation } from 'types';
import { general } from 'store/general';
import { Wrap } from './styled';

function MainPage() {
  const dispatch = useAppDispatch();
  const currentPlace = useAppSelector(general.selectors.currentPlace);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const loadForecast = (location: ILocation) => {
    return dispatch(general.thunks.getForecast({ formData: { ...location } }));
  };

  const currentPlacePresent =
    !!currentPlace.location.latitude && currentPlace.location.longitude;

  const loadOnNavigation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          loadForecast({
            latitude: String(coords.latitude),
            longitude: String(coords.longitude),
          }).then(() =>
            dispatch(
              general.actions.SET_CURRENT_PLACE_FROM_NAVIGATION('Your location')
            )
          );
        },
        (error) => toast.error(error.message)
      );
    }
  };

  useEffect(() => {
    if (currentPlacePresent) {
      loadForecast(currentPlace.location);
    } else {
      loadOnNavigation();
    }
  }, []);

  useEffect(() => {
    if (!currentPlacePresent) {
      navigator.permissions.query({ name: 'geolocation' }).then((res) => {
        if (res.state === 'prompt') {
          setIsOverlayVisible(true);
        }

        res.onchange = () => {
          console.log(res);
          setIsOverlayVisible(false);
        };
      });
    }
  }, [currentPlacePresent]);

  return (
    <>
      <ROverlay isVisible={isOverlayVisible} />
      <Wrap>
        <AppHeader />
        <MainInfoBlock />
      </Wrap>
    </>
  );
}

export default MainPage;
