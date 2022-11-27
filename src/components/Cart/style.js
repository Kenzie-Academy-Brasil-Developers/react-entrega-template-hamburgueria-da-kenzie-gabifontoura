import styled from "styled-components";

export const StyledCart = styled.ul`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 21rem ;
    overflow-y: auto;
    background-color:${({theme}) => theme.colors.colorGrey1};
    margin: 2rem;
`

export const StyledCartHeader = styled.header`
    display:flex;
    background:${({theme}) => theme.colors.colorBrand1};
    height: max-content;
    width: 100%;
    padding: 1rem 1.5rem;


`