import React from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typography";
import CartCard from "./CartCard";
import { StyledFlexBox } from "./CartCard/style";

import {
  StyledCart,
  StyledCartHeader,
  StyledEmptyCart,
  StyledFlexBoxCart,
  StyledTotalCart,
} from "./style";

const Cart = ({ currentSale, setCurrentSale, removeProductFromCurrentSale }) => {
  const sum = currentSale.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.price);
  }, 0);

  return (
    <StyledFlexBoxCart>
      <StyledCartHeader>
        <StyledText tag="h4" color="white">
          Carrinho de compras
        </StyledText>
      </StyledCartHeader>

      { currentSale.length > 0 ?
      <>
        <StyledCart>
            {currentSale.map((selected) => (
                <CartCard
                selected={selected}
                key={selected.id}
                removeProductFromCurrentSale={removeProductFromCurrentSale}
                />
                ))}
            </StyledCart>
            <StyledTotalCart>
                <StyledFlexBox>
                <StyledText tag="h4" color={({ theme }) => theme.colors.colorGrey3}>Total</StyledText>
                <StyledText tag="h4" color={({ theme }) => theme.colors.colorGrey3}>
                    R$ {sum.toFixed(2).replace(".", ",")}
                </StyledText>
                </StyledFlexBox>
                <StyledButton buttonSize="default" buttonStyle="secondary" onClick={()=>setCurrentSale([])}>
                Remover todos
                </StyledButton>
            </StyledTotalCart>
      </>
      : 
      <StyledCart>
        <StyledEmptyCart>
            <StyledText tag="h3" fontSize="two" textAlign="center" color={({ theme }) => theme.colors.colorGrey4}>Sua sacola está vazia</StyledText>    
            <StyledText tag="h5" textAlign="center" fontWeight={400} color={({ theme }) => theme.colors.colorGrey3}>Adicione itens</StyledText>    
        </StyledEmptyCart>
      </StyledCart>
}

    </StyledFlexBoxCart>
  );
};

export default Cart;
