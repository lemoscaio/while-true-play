import React, { useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"

import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs"

import * as S from "./../styles/styles.js"
import Footer from "../components/Footer.js"
import { UserContext } from "../contexts/UserContext"
import { MenuContext } from "./../contexts/MenuContext.js"

export default function Game() {
    const { gameId } = useParams()

    const navigate = useNavigate()
    const URL = `${process.env.REACT_APP_API_URL}/games/${gameId}`

    const { userInfo, setUserInfo } = useContext(UserContext)
    const { gamesInCart } = userInfo

    const { menuIsOpen } = useContext(MenuContext)

    const [gameInCart, setGameInCart] = useState(false)
    const [game, setGame] = useState(() => {
        const promise = axios.get(URL)
        promise.then((response) => {
            setGame(response.data)
            for (let i = 0; i < gamesInCart.length; i++) {
                if (gamesInCart[i].id === response.data.id) {
                    setGameInCart(true)
                }
            }
        })
        promise.catch((e) => {
            console.log(e)
        })
    })

    const carouselCover = game?.images?.cover
    const carouselImages = game?.images?.screenshots

    if (carouselImages) {
        Array.from(carouselImages)
    }

    function addToCart() {
        const otherGamesInCart = userInfo.gamesInCart
        const newGame = game
        const totalGames = otherGamesInCart.concat(newGame)
        setUserInfo({ ...userInfo, gamesInCart: totalGames })
        setGameInCart(true)
    }

    function navigateToCheckout() {
        navigate("/checkout")
    }

    return game ? (
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
                            <button onClick={navigateToCheckout}>
                                <BsFillCartCheckFill />
                                Checkout now
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    addToCart()
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

                    <S.SimilarProductsContainer>
                        <h3>You may like these products</h3>
                        {/*!!! INSERT GAMES CARDS HERE WHEN DONE !!!*/}
                    </S.SimilarProductsContainer>
                </S.GamePage>
            </S.Container>
            <Footer />
        </>
    ) : (
        <>Loading...</>
    )
}
