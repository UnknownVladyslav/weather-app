import { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode, render } from 'react-dom';

import { RPopupPrompt } from 'components/RPopupPrompt';

// eslint-disable-next-line react/prop-types
function Router({ children }) {
  const userConfirmation = useCallback((message, callback) => {
    const node = document.getElementById('modal-portal');

    const cleanUp = (answer) => {
      unmountComponentAtNode(node);
      callback(answer);
    };

    render(
      <RPopupPrompt
        message={message}
        cleanUp={cleanUp}
      />,
      node
    );
  }, []);

  return (
    <BrowserRouter getUserConfirmation={userConfirmation}>
      {children}
    </BrowserRouter>
  );
}

export default Router;
