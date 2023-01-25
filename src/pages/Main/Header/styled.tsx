import styled from 'styled-components';

import { Flex } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  ${Flex};
  padding-block: 16px;
`;

const SearchForm = styled.form`
  ${Flex({ gap: '10px' })};
`;

export { Wrap, SearchForm };
