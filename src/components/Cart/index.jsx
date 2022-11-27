import React from 'react'
import { StyledText } from '../../styles/typography'
import CartCard from './CartCard'
import { StyledCart, StyledCartHeader } from './style'

const Cart = ({currentSale , removeProductFromCurrentSale}) => {
  return (
    <>

        <StyledCart>
            <StyledCartHeader>
                <StyledText tag="h4" color="white">Carrinho de compras</StyledText>
            </StyledCartHeader>    

            {currentSale.map((selected) => (
                <CartCard selected={selected} key={selected.id} removeProductFromCurrentSale={removeProductFromCurrentSale}/>

            ))}
        </StyledCart>
    </>
  )
}

export default Cart