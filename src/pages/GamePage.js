import React, { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs"

import * as S from "./../styles/styles.js"
import Footer from "../components/Footer.js"
import { UserContext } from "../contexts/UserContext"
import { MenuContext } from "./../contexts/MenuContext.js"
import { LoadingContext } from "./../contexts/LoadingContext.js"

export default function GamePage() {
    const token = localStorage.getItem("token")
    const { isLoading, setIsLoading } = useContext(LoadingContext)

    const { gameId } = useParams()
    const navigate = useNavigate()
    const { userInfo, setUserInfo } = useContext(UserContext)
    const URL = `${process.env.REACT_APP_API_URL}/games/${gameId}`

    const { menuIsOpen } = useContext(MenuContext)

    const [game, setGame] = useState(() => {
        setIsLoading(true)
        const promise = axios.get(URL)
        promise.then((response) => {
            setGame(response.data)
            setIsLoading(false)
        })
        promise.catch((e) => {
            setIsLoading(false)
        })
    })
    const [gameInCart, setGameInCart] = useState(false)

    useEffect(() => {
        if (
            userInfo.gamesInCart?.some(
                (gameInCart) => gameInCart.id === game?.id
            )
        ) {
            setGameInCart(true)
        } else {
            setGameInCart(false)
        }
    }, [game?.id, userInfo])

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
                    .then()
                    .catch()
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

    const carouselCover = game?.images?.cover
    const carouselImages = game?.images?.screenshots

    if (carouselImages) {
        Array.from(carouselImages)
    }

    return isLoading ? (
        <S.LoadingContainer>Loading...</S.LoadingContainer>
    ) : game ? (
        <>
            <S.Container menuIsOpen={menuIsOpen}>
                <S.GameImagesCarousel>
                    <Slide easing="ease">
                        <div
                            style={{
                                backgroundImage: `url(${carouselCover})`,
                            }}
                        ></div>
                        {carouselImages
                            ? carouselImages?.map((image, key) => {
                                  return (
                                      <div
                                          style={{
                                              backgroundImage: `url(${image})`,
                                          }}
                                          key={key}
                                      ></div>
                                  )
                              })
                            : ""}
                    </Slide>
                </S.GameImagesCarousel>
                <S.GamePage>
                    <S.TitleContainer>
                        <h1>{game.title}</h1>
                    </S.TitleContainer>

                    <S.BuyContainer>
                        {game.hasDiscount && (
                            <S.DiscountLabelBig>{`-${
                                game.discountAmount * 100
                            }%`}</S.DiscountLabelBig>
                        )}
                        <S.PriceContainer>
                            {game.hasDiscount && (
                                <span>R$ {game.price.toFixed(2)}</span>
                            )}
                            <h2>
                                R${" "}
                                {(
                                    game.price *
                                    (1 - game.discountAmount)
                                ).toFixed(2)}
                            </h2>
                        </S.PriceContainer>

                        {gameInCart ? (
                            <button onClick={(e) => handleButtonClick(e)}>
                                <BsFillCartCheckFill />
                                Checkout now
                            </button>
                        ) : (
                            <button
                                onClick={(e) => {
                                    handleButtonClick(e)
                                }}
                            >
                                <BsCartPlus />
                                Add to cart
                            </button>
                        )}
                    </S.BuyContainer>

                    <S.DescriptionContainer>
                        <h3>Description</h3>
                        <p>{game.description}</p>
                    </S.DescriptionContainer>

                    <S.SimilarProductsContainer></S.SimilarProductsContainer>
                </S.GamePage>
            </S.Container>
            <Footer />
        </>
    ) : (
        <>Loading...</>
    )
}
