import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.colors.colorGrey1};
    position: fixed;
    top:0;
    z-index: 1;

    @media (max-width: 800px) {
       width: 100%;
       margin: 0;
       height: 8rem;
   }

`

export const StyledFlexBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
        display:flex;
        flex-direction: column;
        height: 3rem;
        align-items: center;
        width:100vw;
        margin: .5rem 0;
        gap:.25rem;

        > img {
            width: 8rem;
        }
   }
`
export const StyledInput = styled.input`
    outline: none;
    border: none;
    border-radius: var(--radius-1);
    background-color: ${({theme}) => theme.colors.colorFixedWhite};
    color: ${({theme}) => theme.colors.colorGrey4};
    padding: 0 1rem;
    height: 3.5rem ;
    width: 22rem;
    border: 2px solid  ${({theme}) => theme.colors.colorGrey2};

    @media (max-width: 800px) {
       width: 20rem;

   }


`

export const StyledAbsolute = styled.div`

    position: absolute;
    margin: 0.5rem 0  0.5rem 15rem;
    
    @media (max-width: 800px) {
        margin: 0.25rem 0 0.25rem 13rem;
   }

`