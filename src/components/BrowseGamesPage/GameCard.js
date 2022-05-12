import React from "react"
import { useNavigate } from "react-router-dom"

import * as S from "./../../styles/styles"

export default function GameCard(props) {
    const { game } = props
    const navigate = useNavigate()

    function handleClick(e) {
        navigate(`/game/${game.id}`)
    }

    return (
        <S.GameCard onClick={(e) => handleClick(e)}>
            <img src={game.images.cover} alt={`${game.title} game cover`} />
            <div>
                <S.GameTitle>{game.title}</S.GameTitle>
                <S.ValuesContainer>
                    {game["has-discount"] && (
                        <S.DiscountLabel>{`-${
                            game["discount-amount"] * 100
                        }%`}</S.DiscountLabel>
                    )}
                    <S.PriceContainer>
                        {game["has-discount"] && (
                            <S.OriginalPrice>
                                {game.price.toFixed(2)}
                            </S.OriginalPrice>
                        )}
                        <S.DiscountPrice>
                            {(
                                game.price *
                                (1 - game["discount-amount"])
                            ).toFixed(2)}
                        </S.DiscountPrice>
                    </S.PriceContainer>
                </S.ValuesContainer>
            </div>
        </S.GameCard>
    )
}
