import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import * as S from "./../styles/styles.js"
import AddToCartButton from "./AddToCartButton.js"
import { UserContext } from "../contexts/UserContext"

export default function GameCarousel(props) {
    const token = localStorage.getItem("token")
    const { game } = props
    const [gameInCart, setGameInCart] = useState(false)
    const { userInfo, setUserInfo } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (
            userInfo.gamesInCart?.some(
                (gameInCart) => gameInCart.id === game?.id
            )
        ) {
            setGameInCart(true)
        }
    }, [game?.id, userInfo])

    function handleClick(e) {
        e.stopPropagation()
        navigate(`/game/${game.id}`)
    }

    function handleButtonClick(e) {
        e.stopPropagation()

        if (!gameInCart) {
            if (token)
                axios
                    .put(
                        `${process.env.REACT_APP_API_URL}/cart`,
                        { newGame: game },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))
            const newGame = game
            if (!userInfo.gamesInCart) {
                userInfo.gamesInCart = []
            }
            setUserInfo({
                ...userInfo,
                gamesInCart: [...userInfo.gamesInCart, newGame],
            })
            setGameInCart(true)
        } else {
            navigate("/checkout")
        }
    }

    return (
        <div className="each-slide" onClick={(e) => handleClick(e)}>
            <div
                style={{
                    backgroundImage: `url(${game.images.cover})`,
                }}
            >
                <S.CarouselInfo>
                    <S.CarouselGameTitle>{game.title}</S.CarouselGameTitle>
                    <S.GamePriceAndCartContainer>
                        <S.GamePriceContainer>
                            {game.hasDiscount && (
                                <S.DiscountLabel>{`-${
                                    game.discountAmount * 100
                                }%`}</S.DiscountLabel>
                            )}
                            <S.CarouselPrice>
                                R$&nbsp;
                                {(
                                    game.price *
                                    (1 - game.discountAmount)
                                ).toFixed(2)}
                            </S.CarouselPrice>
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
                </S.CarouselInfo>
                <span>{game.images.cover.caption}</span>
            </div>
        </div>
    )
}
