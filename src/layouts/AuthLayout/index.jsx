import { Route, Switch } from 'react-router-dom';

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

// eslint-disable-next-line react/prop-types
function RoleChecker({ children }) {
  // const token = useSelector(auth.selectors.token);
  // const roles = useSelector(auth.selectors.roles);

  // TODO: add conditions

  return <div>{children}</div>;
}

export default AuthLayout;
