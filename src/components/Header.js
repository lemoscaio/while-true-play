import React from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { TiShoppingCart } from "react-icons/ti"
import { BiSearchAlt2 } from "react-icons/bi"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import axios from "axios"

import StoreLogo from "./../assets/logo.png"
import UserContext from "../contexts/UserContext"

export default function Header() {
    const { userInfo } = useContext(UserContext)
    const { name, image } = userInfo
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchParams, setSearchParams] = useState("")
    const navigator = useNavigate()

    function searchGame() {
        const promise = axios.get(
            `${process.env.REACT_APP_API_URL}/games?q=${searchParams}`
        )
        promise.then((response) => {
            navigator(`/games?q=${searchParams}`)
            setSearch(false)
        })
        promise.catch((e) => {
            console.log(e)
        })
    }

    return (
        <>
            {search ? (
                <SearchContainer>
                    <BiSearchAlt2 onClick={searchGame} />
                    <input
                        type="text"
                        onChange={(e) => setSearchParams(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchGame()
                            }
                        }}
                    />
                    <AiOutlineClose
                        onClick={() => {
                            setSearchParams("")
                            setSearch(false)
                        }}
                    />
                </SearchContainer>
            ) : (
                <Nav>
                    <Link
                        to="/"
                        onClick={() => {
                            setMenu(false)
                        }}
                    >
                        <img
                            src={StoreLogo}
                            alt="While True Play Store logo"
                        ></img>
                    </Link>
                    <TiShoppingCart />
                    <BiSearchAlt2
                        onClick={() => {
                            setSearch(true)
                            setMenu(false)
                        }}
                    />
                    <div
                        onClick={() => {
                            setMenu(!menu)
                        }}
                    >
                        <AiOutlineMenu />
                        <span>MENU</span>
                    </div>
                </Nav>
            )}

            {menu ? (
                <NavMenu>
                    <Link
                        to="/games"
                        onClick={() => {
                            setMenu(false)
                        }}
                    >
                        <p>Browse all games</p>
                    </Link>
                    <ProfileContainer>
                        {name ? (
                            <Profile>
                                {image ? <img src={image} /> : ""}
                                <span>{name}</span>
                            </Profile>
                        ) : (
                            <Link
                                to="/sign-in"
                                onClick={() => {
                                    setMenu(false)
                                }}
                            >
                                <h1>SIGN IN</h1>
                            </Link>
                        )}
                    </ProfileContainer>
                </NavMenu>
            ) : (
                ""
            )}
        </>
    )
}

const Nav = styled.header`
    width: 100vw;
    height: 50px;

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #1a1a1a;
    top: 0;
    z-index: 2;

    font-size: 12px;
    color: #a6a6a6;

    a:focus {
        outline: none;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;
    }

    img {
        width: 80px;
        height: 45px;
        margin-top: 7px;
        object-fit: cover;
    }

    svg {
        font-size: 22px;
        color: #a6a6a6;
    }

    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 7px;
        }
    }
`
const SearchContainer = styled.header`
    width: 100vw;
    height: 50px;

    position: fixed;
    display: flex;
    align-items: center;
    background: #1a1a1a;

    font-size: 12px;
    color: #a6a6a6;
    padding: 5px 5px 5px 5px;

    input {
        margin-left: 10px;
        width: 80%;
        border: none;
        border-width: 0px;
        outline: none;
        background: linear-gradient(gray, gray) center bottom 1px /
            calc(100% - 4px) 1px no-repeat;
        color: white;
        font-size: 16px;
    }

    svg {
        margin-left: 5px;
        font-size: 25px;
        color: white;
    }
`

const NavMenu = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    background: #1a1a1a;
    z-index: 2;

    padding: 10px 50px;
    opacity: 0.99;

    p {
        font-size: 16px;
        color: white;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }
`

const ProfileContainer = styled.section`
    position: absolute;
    bottom: 60px;
    left: 0;

    width: 100vw;
    height: 80px;
    padding: 30px 50px;
    border-top: 1px solid gray;
    text-align: center;

    h1 {
        font-size: 16px;
        color: #cb96e6;
        font-weight: 400;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 45px;
    }

    span {
        margin-left: 20px;
        color: white;
        font-weight: 300;
    }
`
