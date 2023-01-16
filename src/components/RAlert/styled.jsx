import styled, { css } from 'styled-components';

const Alert = styled.div(
  ({ theme, alertCss }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 12px;
    background-color: ${theme.lilyWhite};
    border-radius: 8px;
    color: ${theme.policeBlue};

    ${alertCss};
  `
);

export { Alert };
