import styled, { css } from 'styled-components';

const Button = styled.button<{
  fullWidth?: boolean;
  height: number;
  variant: string;
  variantColor?: string;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({ height }) => `${height}px`};
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.15s linear;
  cursor: pointer;

  ${({ variant, theme, variantColor }) => {
    switch (variant) {
      case 'outline':
        return css`
          color: ${variantColor || theme.maastrichtBlue};
          background-color: ${variantColor ? 'transparent' : theme.white};
          border-color: ${variantColor || theme.gainsboro};

          &:hover {
            background-color: ${theme.cultured};
          }

          &:focus {
            border-color: ${theme.tuftsBlue};
            background-color: ${theme.cultured};
          }

          &:active {
            background-color: ${theme.platinum};
          }
        `;
      case 'text':
        return css`
          color: ${theme.maastrichtBlue};
          border-color: transparent;
          background-color: transparent;

          &:hover {
            background-color: ${theme.cultured};
          }

          &:focus {
            border-color: ${theme.cyanBlueAzure};
            background-color: ${theme.cultured};
          }

          &:active {
            background-color: ${theme.platinum};
          }
        `;
      default:
        return css`
          color: ${theme.white};
          background-color: ${theme.lucea};
          border-color: ${theme.lucea};

          &:hover {
            background-color: ${theme.blueOysterCult};
            border-color: ${theme.blueOysterCult};
          }

          &:focus {
            background-color: ${theme.flickeringSea};
            border-color: ${theme.flickeringSea};
          }

          &:active {
            background-color: ${theme.flickeringSea};
            border-color: ${theme.flickeringSea};
          }
        `;
    }
  }}

  ${({ disabled, theme, variant }) =>
    disabled &&
    css`
      color: ${theme.gainsboro};
      background-color: ${variant !== 'contained'
        ? 'transparent'
        : theme.antiFlashWhite};
      border-color: ${variant !== 'text' ? theme.gainsboro : 'transparent'};
      pointer-events: none;
    `}
  ${({ css }) => css}
`;

const ButtonChildren = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PrependIcon = styled.span<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      & > svg {
        fill: ${theme.gainsboro};
      }
    `}
`;

export { Button, ButtonChildren, PrependIcon };
