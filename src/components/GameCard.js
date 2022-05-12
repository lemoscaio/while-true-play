import React from "react"

import * as S from "./../styles/styles"

export default function GameCard() {
    return (
        <S.GameCard>
            <img
                src="https://i.picsum.photos/id/170/200/300.jpg?hmac=8MNcDgapCZN2mHu0jnLxPWkxuwz9rq4TMQfQsYTINCk"
                alt=""
            />
            <div>
                <S.GameTitle>Songs of Conquest</S.GameTitle>
                <S.ValuesContainer>
                    <S.DiscountLabel>-90%</S.DiscountLabel>
                    <S.PriceContainer>
                        <S.OriginalPrice>R$20,10</S.OriginalPrice>
                        <S.DiscountPrice>R$10,79</S.DiscountPrice>
                    </S.PriceContainer>
                </S.ValuesContainer>
            </div>
        </S.GameCard>
    )
}
