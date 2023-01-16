import { createPortal } from 'react-dom';

function RModalPortal({ children }) {
  return createPortal(children, document.getElementById('modal-portal'));
}

export { RModalPortal };
