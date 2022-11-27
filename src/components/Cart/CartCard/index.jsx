import React from "react";

import { StyledButton } from "../../../styles/buttons";
import { StyledText } from "../../../styles/typography";
import { StyledCartCard, StyledFlexBox, StyledFlexBoxColumn } from "./style";

const CartCard = ({ selected, removeProductFromCurrentSale }) => {
  return (
    <StyledCartCard>
      <StyledFlexBox>
        <img src={selected.img} alt="" />

        <StyledFlexBoxColumn>
          <StyledText
            tag="h3"
            fontSize="three"
            justifyContent="start"
            color={({ theme }) => theme.colors.colorGrey4}
          >
            {selected.name}
          </StyledText>
          <StyledText
            tag="h5"
            fontWeight={400}
            color={({ theme }) => theme.colors.colorGrey3}
          >
            {selected.category}
          </StyledText>
        </StyledFlexBoxColumn>
      </StyledFlexBox>

      <StyledButton
        color={({ theme }) => theme.colors.colorGrey4}
        onClick={() => removeProductFromCurrentSale(selected.id)}
      >
        Remover
      </StyledButton>
    </StyledCartCard>
  );
};

export default CartCard;
