import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import {
    BsFillExclamationTriangleFill,
    BsCheckCircleFill,
} from "react-icons/bs"

import Footer from "../components/Footer.js"
import { UserContext } from "../contexts/UserContext"

import * as S from "../styles/styles.js"

export default function Checkout() {
    const token = localStorage.getItem("token")
    const [requestMessage, setRequestMessage] = useState({})
    const [realizedOrder, setRealizedOrder] = useState(false)

    const { userInfo, setUserInfo } = useContext(UserContext)
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
                setUserInfo({ ...userInfo, gamesInCart: [] })
                setRealizedOrder(true)
                setRequestMessage(response)
            })
            promise.catch((error) => {
                setRealizedOrder(false)
                setRequestMessage(error)
            })
        }
    }

    function setErrorContainerContent() {
        let errorMessage = ""

        switch (requestMessage.response?.status) {
            case 0:
                errorMessage = "Connection error. Please, try again later."
                break
            case 500:
                errorMessage = "Something went wrong. Please try again later."
                break
            default:
                break
        }
        return errorMessage.length > 0 ? (
            <S.CheckoutErrorMessage>
                <BsFillExclamationTriangleFill /> {errorMessage}
            </S.CheckoutErrorMessage>
        ) : (
            <></>
        )
    }

    function setSuccessContainerContent() {
        let successMessage = ""

        switch (requestMessage?.status) {
            case 200:
            case 201:
                successMessage = "Games bought and added into your account."
                break
            default:
                break
        }
        return successMessage.length > 0 ? (
            <S.CheckoutSuccessMessage>
                <BsCheckCircleFill /> {successMessage}
            </S.CheckoutSuccessMessage>
        ) : (
            <></>
        )
    }

    return (
        <>
            <S.Container>
                <S.OrderContainer>
                    <label>YOUR ORDER</label>

                    {userInfo.gamesInCart?.map((game) => {
                        const {
                            title,
                            images,
                            hasDiscount,
                            price,
                            discountAmount,
                            id,
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
                            <S.GameContainer key={id}>
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
                {setErrorContainerContent()}
                {setSuccessContainerContent()}
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
                            <button disabled={realizedOrder}>
                                Check out now
                            </button>
                        </S.FinishPayment>
                    </form>
                </S.PaymentContainer>
            </S.Container>
            <Footer />
        </>
    )
}
