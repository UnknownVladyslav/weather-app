import { createContext, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProtectedRoute } from 'middleware/ProtectedRoute';
import { AppIsReady } from 'middleware/AppIsReady';
import { appRoles } from 'utils/roles';
import { auth } from 'store/auth';
import { APP_ROUTES } from 'router/appRoutes';
import { userRoutes } from './config';
import { Layout, Main, Content } from './styled';

export const UserLayoutContext = createContext({});

function UserLayout() {
  const mainRef = useRef(null);

  const contextValue = useMemo(() => ({ mainRef }), [mainRef]);

  return (
    <ProtectedRoute>
      <RoleChecker>
        <AppIsReady>
          <Layout>
            <UserLayoutContext.Provider value={contextValue}>
              <Main ref={mainRef}>
                <Content>
                  <Switch>
                    {userRoutes.map(({ id, exact, path, component }) => (
                      <Route
                        key={id}
                        exact={exact}
                        path={path}
                        component={component}
                      />
                    ))}
                  </Switch>
                </Content>
              </Main>
            </UserLayoutContext.Provider>
          </Layout>
        </AppIsReady>
      </RoleChecker>
    </ProtectedRoute>
  );
}

// eslint-disable-next-line react/prop-types
function RoleChecker({ children }) {
  const roles = useSelector(auth.selectors.roles);

  if (!roles.includes(appRoles.GUEST)) {
    return <Redirect to={APP_ROUTES.auth.signIn} />;
  }

  return <div>{children}</div>;
}

export default UserLayout;
