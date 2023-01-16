import { memo } from 'react';

import { Wrap } from './styled';

// eslint-disable-next-line react/prop-types
function DatePickerContainer({ children }) {
  return <Wrap>{children}</Wrap>;
}

export const MemoizedDatePickerContainer = memo(DatePickerContainer);
