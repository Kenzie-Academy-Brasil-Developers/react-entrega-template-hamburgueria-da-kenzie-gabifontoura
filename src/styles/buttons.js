import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius-1);
  transition: 0.4s;
  color: ${({ color }) => (color ? color : "black")};
  
  &:hover {
    filter: brightness(1.2);

  }
  ${({ buttonSize }) => {
    // eslint-disable-next-line default-case
    switch (buttonSize) {
      case "default":
        return css`
          height: 3.75rem;
          padding: 0 1.25rem;
        `;
      case "medium":
        return css`
          height: 2.5rem;
          padding: 0 1.25rem;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    // eslint-disable-next-line default-case
    switch (buttonStyle) {
      case "primary":
        return css`
          background:${({theme}) => theme.colors.colorBrand1};
          color: var(--color-fixed-white);
          width: max-content;

          &:hover {
            background:${({theme}) => theme.colors.colorBrand2};
            color: #000000}

          }
        `;
      case "secondary":
        return css`
          background: ${({theme}) => theme.colors.colorGrey2};
          color:  ${({theme}) => theme.colors.colorGrey3};

          &:hover {
            background: ${({theme}) => theme.colors.colorGrey3};
            color:  ${({theme}) => theme.colors.colorGrey1};
          }
        `;
    }
  }}


`;

