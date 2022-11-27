import styled from "styled-components";

export const StyledProductsList = styled.ul`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   margin: 2rem 0;
   width:60%;
   
   @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 450px) {      
        grid-template-columns: 1fr;      
   }
`;