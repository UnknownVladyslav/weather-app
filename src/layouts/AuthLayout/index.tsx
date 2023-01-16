import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { auth } from 'store/auth';
import { IRoleChecker } from 'types/common';
import { authRoutes } from './config';
import { Layout } from './styled';

function AuthLayout() {
  return (
    <RoleChecker>
      <Layout>
        <Switch>
          {authRoutes.map(({ id, exact, path, component }) => (
            <Route
              key={id}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </Layout>
    </RoleChecker>
  );
}

function RoleChecker({ children }: IRoleChecker) {
  const token = useSelector(auth.selectors.token);
  const roles = useSelector(auth.selectors.roles);

  // TODO: add conditions

  return <>{children}</>;
}

export default AuthLayout;
