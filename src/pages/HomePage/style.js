import styled from "styled-components";

export const StyledHomePage = styled.section`
    width: 100%;
    min-height: 100vh;
    background: ${({theme}) => theme.colors.colorFixedWhite};

`

export const StyledHomePageFlexBox = styled.div`
    display:flex;
    margin: 4rem 0;
    justify-content: space-between;
   
`