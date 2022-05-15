import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import * as S from "../styles/styles.js"
import AddToCartButton from "./AddToCartButton.js"
import { UserContext } from "../contexts/UserContext"

export default function GameHighlight(props) {
    const { game } = props
    const navigate = useNavigate()
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [gameInCart, setGameInCart] = useState(false)

    function handleClick(e) {
        e.stopPropagation()
        navigate(`/game/${game.id}`)
    }

    function handleButtonClick(e) {
        e.stopPropagation()

        if (!gameInCart) {
            const newGame = game.id
            setUserInfo({
                ...userInfo,
                gamesInCart: [...userInfo.gamesInCart, newGame],
            })
            setGameInCart(true)
        } else {
            navigate("/checkout")
        }
    }

    return game ? (
        <>
            <S.GameHighlight
                onClick={(e) => handleClick(e)}
                backgroundImage={game.images.cover}
            >
                <S.GameInfoContainer>
                    <S.HighlightGameTitle>{game.title}</S.HighlightGameTitle>
                    <S.GamePriceAndCartContainer>
                        <S.GamePriceContainer>
                            {game.hasDiscount && (
                                <S.DiscountLabel>{`-${
                                    game.discountAmount * 100
                                }%`}</S.DiscountLabel>
                            )}
                            <S.PriceContainer>
                                <S.DiscountPrice>
                                    R$&nbsp;
                                    {(
                                        game.price *
                                        (1 - game.discountAmount)
                                    ).toFixed(2)}
                                </S.DiscountPrice>
                            </S.PriceContainer>
                        </S.GamePriceContainer>
                        {!gameInCart ? (
                            <AddToCartButton
                                addToCartCallback={(e) => handleButtonClick(e)}
                            >
                                <S.AddToCartIcon />
                                Add to Cart
                            </AddToCartButton>
                        ) : (
                            <AddToCartButton
                                addToCartCallback={(e) => handleButtonClick(e)}
                            >
                                <S.CheckoutIcon />
                                Checkout now
                            </AddToCartButton>
                        )}
                    </S.GamePriceAndCartContainer>
                </S.GameInfoContainer>
            </S.GameHighlight>
        </>
    ) : (
        <></>
    )
}
