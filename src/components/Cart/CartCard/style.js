import styled from "styled-components";

export const StyledCartCard = styled.li`
  background: ${({ theme }) => theme.colors.colorGrey1};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;

  &:hover {
    filter: brightness(1.2);
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.colorFixedWhite};
  }

  button:hover {
    text-decoration: underline;
  }
`;

export const StyledFlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem;
`;

export const StyledFlexBox = styled.div`
  display: flex;
  gap: 1rem;
  overflow: auto;
`;
