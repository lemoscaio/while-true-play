import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { BsCartPlus } from "react-icons/bs"

import UserContext from "../contexts/UserContext"

export default function Game() {
    const { idGame } = useParams()
    const URL = `http://localhost:5000/games/${idGame}`

    const { userInfo, setUserInfo } = useContext(UserContext)
    const [gameInfo, setGameInfo] = useState({})
    let price
    let discountedPrice

    const hasDiscount = gameInfo["has-discount"]

    if (hasDiscount) {
        discountedPrice =
            gameInfo?.price - gameInfo?.price * gameInfo["discount-amount"]
        discountedPrice = discountedPrice.toFixed(2)
        price = gameInfo?.price?.toFixed(2)
    } else {
        price = gameInfo?.price?.toFixed(2)
    }

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then((response) => {
            console.log(response.data)
            setGameInfo(response.data)
        })
        promise.catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        // !!! ADD HEADER WHEN DONE !!!
        <MainContainer>
            <CoverCarousel>
                <img src={gameInfo.images?.cover}></img>
            </CoverCarousel>

            <TitleContainer>
                <h1>{gameInfo.title}</h1>
            </TitleContainer>

            <BuyContainer>
                {/*!!! FIX DISCOUNT MARGIN ON DIFFERENT SCREENS !!! */}
                {hasDiscount ? (
                    <div>-{gameInfo["discount-amount"] * 100}%</div>
                ) : (
                    ""
                )}
                {hasDiscount ? <span>R$ {price}</span> : ""}
                <h2 style={hasDiscount ? { marginLeft: "46%" } : {}}>
                    R$ {hasDiscount ? discountedPrice : price}
                </h2>
                <button>
                    <BsCartPlus />
                    Add to cart
                </button>
            </BuyContainer>

            <DescriptionContainer>
                <h3>Description</h3>
                <h4>{gameInfo.description}</h4>
            </DescriptionContainer>

            <SimilarProductsContainter>
                <h3>You may like these products</h3>
                {/*!!! INSERT GAMES CARDS HERE WHEN DONE !!!*/}
            </SimilarProductsContainter>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    padding: 0px 10px;
    background: #d9d9d9;
`

const CoverCarousel = styled.section`
    position: absolute;
    top: 0;
    left: 0;

    img {
        width: 100vw;
        height: 210px;
    }
`

const TitleContainer = styled.div`
    margin-top: 210px;

    h1 {
        padding: 22px 0;
        font-size: 24px;
        font-color: #212121;
    }
`

const BuyContainer = styled.div`
    width: 100%;
    height: auto;
    background: #e9e9e9;
    padding: 35px 20px 25px;
    position: relative;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 25%);

    // Discount div
    div {
        top: 10px;
        left: 0;
        width: 35%;
        height: 55px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        background: #86328a;
        border-radius: 0 5px 5px 0;
        font-size: 32px;
        font-weight: 600;
        color: #fff;
    }

    span {
        position: absolute;
        top: 15px;
        left: 62%;

        font-size: 16px;
        color: gray;
        text-decoration: line-through;
    }

    h2 {
        position: relative;
        margin: 0;
        color: #404040;
        font-size: 28px;
    }

    button {
        margin-top: 25px;
        width: 100%;
        height: 50px;
        border: 1px solid #96bd27;
        border-radius: 5px;
        border-bottom-color: #69941b;
        border-left-color: #7fa721;
        border-right-color: #7fa721;
        color: #fff;
        background-image: linear-gradient(-180deg, #9fbf00, #80ab00 91%);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 25%);
        font-weight: bold;

        svg {
            margin-right: 10px;
        }
    }
`

const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid #bfbfbf;

    h3 {
        font-size: 16px;
        margin: 0;
        font-color: #212121;
        font-weight: 500;
    }

    h4 {
        margin-top: 7px;
        font-size: 14px;
        font-color: #545454;
        font-weight: 300;
        line-height: 17px;
    }
`
const SimilarProductsContainter = styled.div`
    width: 100%;
    margin-top: 40px;

    h3 {
        font-size: 16px;
        margin: 0;
        font-color: #212121;
        font-weight: 500;
        padding-bottom: 15px;
        border-bottom: 1px solid #bfbfbf;
    }
`
