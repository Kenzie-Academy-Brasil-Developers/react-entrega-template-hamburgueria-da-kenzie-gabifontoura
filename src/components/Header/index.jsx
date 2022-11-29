import React from "react";
import logo from "../../assets/logo.svg";
import { StyledButton } from "../../styles/buttons";
import { Container } from "../../styles/Container";
import {
  StyledAbsolute,
  StyledFlexBoxHeader,
  StyledHeader,
  StyledInput,
} from "./style";

const Header = ({
    setSearch,
    search,
  setDarkMode,
  darkMode,
}) => {
  
  return (
    <StyledHeader>
        <Container>
            <StyledFlexBoxHeader>
                <img src={logo} alt="Burger Kenzie" />

                <StyledButton
                    color={({ theme }) => theme.colors.colorGrey4}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    Alterar tema
                </StyledButton>
                <StyledFlexBoxHeader>
                    <StyledInput
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    />
                    <StyledAbsolute>
                        <StyledButton buttonSize="medium" buttonStyle="primary">
                            Pesquisar
                        </StyledButton>
                    </StyledAbsolute>
                </StyledFlexBoxHeader>
            </StyledFlexBoxHeader>
        </Container>
      <div className="container">
       
      </div>
    </StyledHeader>
  );
};

export default Header;
