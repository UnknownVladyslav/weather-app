import { ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

import { APP_ROUTES } from 'router/appRoutes';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: add token
  const token = 'token from useSelector';

  if (!token) return <Redirect to={APP_ROUTES.auth.signIn} />;
  return <>{children}</>;
}
