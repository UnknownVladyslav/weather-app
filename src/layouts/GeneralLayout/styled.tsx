import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.infinity};
`;

export { Layout };
