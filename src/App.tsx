import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { RLoadingOverlay } from 'components/RLoadingOverlay';
import NotFoundPage from 'pages/General/NotFound';

const GeneralLayout = lazy(() => import('layouts/GeneralLayout'));

function App() {
  return (
    <Suspense fallback={<RLoadingOverlay isVisible />}>
      <Switch>
        <Route
          path="/"
          component={GeneralLayout}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
