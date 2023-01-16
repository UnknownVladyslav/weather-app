import { toast } from 'react-toastify';

import { ReactComponent as IconInfo } from 'assets/img/global/alert/icon-info-white.svg';

export const toastError = (message) => {
  toast.error(message, {
    icon: <IconInfo />,
  });
};

export const handleServerErrors = (error) => {
  const { data, status, statusText } = error.response;

  console.log('%c => Error ', 'background: red; color: #000', error.response);
  if (data && data.errors) {
    Object.values(data.errors).forEach((errorMsg) => {
      if (Array.isArray(errorMsg)) {
        toastError(errorMsg[0]);
      }
    });
  } else if (data && data.message) {
    toastError(data.message);
  } else {
    toastError(`Error ${status}: ${statusText}`);
  }
};
