import { Redirect } from 'react-router-dom';

import { APP_ROUTES } from 'router/appRoutes';

// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ children }) {
  // TODO: add token
  const token = 'token from useSelector';

  if (!token) return <Redirect to={APP_ROUTES.auth.signIn} />;
  return <div>{children}</div>;
}
