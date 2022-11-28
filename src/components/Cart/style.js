import styled from "styled-components";

export const StyledCart = styled.ul`
    display: flex;
    flex-direction: column;
    height: 16rem ;
    overflow-y: auto;
    background-color:${({theme}) => theme.colors.colorGrey1};

`

export const StyledCartHeader = styled.header`
    display:flex;
    background:${({theme}) => theme.colors.colorBrand1};
    height: max-content;
    width: 100%;
    padding: 1rem 1.5rem;


`

export const StyledFlexBoxCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 2rem auto;
    position: fixed;
    left: 65%;
    
`;

export const StyledTotalCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background:${({theme}) => theme.colors.colorGrey1};
    border-top: 2px solid ${({theme}) => theme.colors.colorGrey2};
    
`;


export const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    gap: 1rem;
 
    
`;