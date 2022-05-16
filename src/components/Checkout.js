import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"

import { UserContext } from "../contexts/UserContext"
import * as S from "./../styles/styles.js"

export default function Checkout() {
    const token = localStorage.getItem("token")
    const { userInfo } = useContext(UserContext)
    const navigate = useNavigate()

    const URL = `${process.env.REACT_APP_API_URL}/checkout`

    let totalPrice = 0
    let fixedPrice

    function buyGames(e) {
        e.preventDefault()

        if (!token) {
            navigate("/sign-in")
        } else {
            const reqBody = {
                games: userInfo.gamesInCart,
            }

            const reqConfig = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            const promise = axios.post(URL, reqBody, reqConfig)

            promise.then((response) => {
                alert("Games bought and added into your account.")
                navigate("/")
            })
            promise.catch((e) => {
                alert("Something went wrong.")
                console.log(e)
            })
        }
    }

    return (
        <>
            <S.MainContainer>
                <S.OrderContainer>
                    <label>YOUR ORDER</label>

                    {userInfo.gamesInCart?.map((game) => {
                        const {
                            title,
                            images,
                            hasDiscount,
                            price,
                            discountAmount,
                        } = game
                        let discountedPrice

                        if (hasDiscount) {
                            discountedPrice = price - price * discountAmount
                            totalPrice += discountedPrice
                            discountedPrice = discountedPrice.toFixed(2)
                        } else {
                            totalPrice += price
                        }
                        fixedPrice = totalPrice.toFixed(2)
                        return (
                            <S.GameContainer>
                                <img
                                    src={images.cover}
                                    alt={`${title} cover`}
                                />
                                <h6>{title}</h6>
                                <div>
                                    {hasDiscount ? (
                                        <h5
                                            style={{
                                                textDecoration: "line-through",
                                                color: "gray",
                                            }}
                                        >
                                            R$ {price}
                                        </h5>
                                    ) : (
                                        ""
                                    )}

                                    {hasDiscount ? (
                                        <h5>R$ {discountedPrice}</h5>
                                    ) : (
                                        <h5>R$ {price}</h5>
                                    )}
                                </div>
                            </S.GameContainer>
                        )
                    })}
                    <S.GameContainer style={{ justifyContent: "right" }}>
                        <h5 style={{ marginRight: "15px" }}>
                            ORDER TOTAL: R$ {fixedPrice}
                        </h5>
                    </S.GameContainer>
                </S.OrderContainer>

                <S.PaymentContainer>
                    <form onSubmit={buyGames}>
                        <S.ConfirmPayment>
                            <input required type="checkbox" />
                            <h5>
                                Confirm the products are correct and proceed
                            </h5>
                        </S.ConfirmPayment>
                        <S.FinishPayment>
                            <h3>R$ {fixedPrice}</h3>
                            <button>Check out now</button>
                        </S.FinishPayment>
                    </form>
                </S.PaymentContainer>
            </S.MainContainer>
        </>
    )
}
