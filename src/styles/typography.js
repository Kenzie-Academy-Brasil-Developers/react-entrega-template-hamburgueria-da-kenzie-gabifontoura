import styled, { css } from "styled-components";

import BaseText from "../components/BaseText";



export const StyledText = styled(BaseText)`
  overflow: hidden;
  text-overflow: ellipsis;

  justify-content: ${({ justifyContent }) => justifyContent};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ fontSize }) => {
    // eslint-disable-next-line default-case
    switch (fontSize) {
      case "one":
        return css`
          font-size: var(--font-size-title-1);
          @media (max-width: 800px) {
            font-size: 2rem;
          }
          @media (max-width: 400px) {
            font-size: 1.6rem;
          }
        `;
      case "two":
        return css`
          font-size: var(--font-size-title-2);
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
          @media (max-width: 400px) {
            font-size: 1.4rem;
          }
        `;
      case "three":
        return css`
          font-size: var(--font-size-title-3);
          @media (max-width: 800px) {
            font-size: 1.5rem;
          }
          @media (max-width: 400px) {
            font-size: 1.25rem;
          }
        `;

      case "bodyText":
        return css`
          font-size: var(--font-size-text-3);
          @media (max-width: 800px) {
            font-size: var(--font-size-text-3);
          }
          @media (max-width: 400px) {
            font-size: var(--font-size-text-3);
          }
        `;
    }
  }};
`;
