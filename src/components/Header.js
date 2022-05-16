import { useContext, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { AiOutlineMenu } from "react-icons/ai"

import axios from "axios"

import * as S from "./../styles/styles.js"
import StoreLogo from "./../assets/logo.png"
import genericProfileImage from "./../assets/userGenericProfile.jpg"
import { UserContext } from "../contexts/UserContext"
import { MenuContext } from "../contexts/MenuContext"

export default function Header() {
    const token = localStorage.getItem("token")
    const { userInfo, setUserInfo } = useContext(UserContext)
    const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)
    const [search, setSearch] = useState(false)
    const [searchParams, setSearchParams] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            axios
                .get(`${process.env.REACT_APP_API_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log("token válido")
                    setUserInfo({ ...response.data })
                })
                .catch((error) => {
                    if (error.response?.data === "TokenExpiredError") {
                        localStorage.removeItem("token")
                    }
                })
        }
    }, [])

    function searchGame() {
        const promise = axios.get(
            `${process.env.REACT_APP_API_URL}/games?q=${searchParams}`
        )
        promise.then((response) => {
            navigate(`/games?q=${searchParams}`)
            setSearch(false)
        })
        promise.catch((e) => {
            console.log(e)
        })
    }

    function handleLogout() {
        localStorage.removeItem("token")
        setUserInfo({})
        // setMenuIsOpen(false)
    }

    return (
        <>
            {search ? (
                <S.SearchContainer>
                    <S.SearchIcon onClick={searchGame} />
                    <input
                        type="text"
                        onChange={(e) => setSearchParams(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchGame()
                            }
                        }}
                    />
                    <S.CloseIcon
                        onClick={() => {
                            setSearchParams("")
                            setSearch(false)
                        }}
                    />
                </S.SearchContainer>
            ) : (
                <S.Header>
                    <Link
                        to="/"
                        onClick={() => {
                            setMenuIsOpen(false)
                        }}
                    >
                        <img
                            src={StoreLogo}
                            alt="While True Play Store logo"
                        ></img>
                    </Link>
                    <S.CartIcon />
                    {userInfo.gamesInCart?.length}
                    <S.SearchIcon
                        onClick={() => {
                            setSearch(true)
                            setMenuIsOpen(false)
                        }}
                    />
                    <S.MenuHeaderContainer
                        onClick={() => {
                            setMenuIsOpen(!menuIsOpen)
                        }}
                    >
                        <AiOutlineMenu />
                        <span>MENU</span>
                    </S.MenuHeaderContainer>
                </S.Header>
            )}

            {menuIsOpen ? (
                <S.NavMenu>
                    <Link
                        to="/games"
                        onClick={() => {
                            setMenuIsOpen(false)
                        }}
                    >
                        <p>Browse all games</p>
                    </Link>
                    <S.ProfileContainer>
                        {userInfo?.name ? (
                            <>
                                <S.Profile>
                                    {userInfo?.image ? (
                                        <img
                                            src={userInfo.image}
                                            alt="User profile"
                                        />
                                    ) : (
                                        <img
                                            src={genericProfileImage}
                                            alt="User profile"
                                        />
                                    )}
                                    <span>{userInfo.name}</span>
                                </S.Profile>
                                <button onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <Link
                                to="/sign-in"
                                onClick={() => {
                                    setMenuIsOpen(false)
                                }}
                            >
                                <h1>SIGN IN</h1>
                            </Link>
                        )}
                    </S.ProfileContainer>
                </S.NavMenu>
            ) : (
                ""
            )}
        </>
    )
}
