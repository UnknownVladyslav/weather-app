import { AppIsCrashed } from 'components/AppIsCrashed';
import { RLoadingOverlay } from 'components/RLoadingOverlay';

// eslint-disable-next-line react/prop-types
export function AppIsReady({ children }) {
  // TODO: add conditions
  const isAppReady = true;
  const isAppFail = false;

  if (!isAppReady) {
    return isAppFail ? <AppIsCrashed /> : <RLoadingOverlay isVisible />;
  }

  return <div>{children}</div>;
}
